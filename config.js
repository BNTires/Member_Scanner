// ============================================================
//  Tyre Warranty — Config File v2
// ============================================================

var CONFIG = {
  GAS_API_URL:       "https://script.google.com/macros/s/AKfycbxZaHMebU_QOSgcbjBhMUqwYYns_6O3PCw84g9x-E-TXKYZLLkGlf-ROXQy6vKFGZw/exec",
  // ── Cloudinary Config ──
  CLOUDINARY_CLOUD:  "dqgszn5b1",
  CLOUDINARY_PRESET: "Bntires",
 
  // ── Shop Info ──
  SHOP_NAME:     "B.N.Tires&Max",
  SHOP_PROVINCE: "สมุทรปราการ",
 
  // ── Receipt Settings ──
  RECEIPT_EXPIRY_SECONDS: 3600,
  IMAGE_MAX_PX:           800,
  IMAGE_QUALITY:          0.7,
 
  // ── Desktop Poller ──
  POLL_INTERVAL_MS:  3000,
  WAITING_TIMEOUT_S: 30
 
};
 

// ── Receipt Upload Fix ──
// Patch handleReceiptPhoto to store full secure_url
document.addEventListener("DOMContentLoaded", function() {
  // Wait for main script to load then patch
  setTimeout(function() {
    var origHandleReceiptPhoto = window.handleReceiptPhoto;
    if (!origHandleReceiptPhoto) return;

    window.handleReceiptPhoto = async function(input) {
      if (!input.files || !input.files[0]) return;
      var file = input.files[0];
      var statusEl  = document.getElementById("receipt-status");
      var previewEl = document.getElementById("receipt-preview");
      var areaEl    = document.getElementById("receipt-area");

      // Show preview
      var reader = new FileReader();
      reader.onload = function(e) {
        previewEl.src = e.target.result;
        previewEl.style.display = "block";
        document.getElementById("receipt-placeholder").style.display = "none";
      };
      reader.readAsDataURL(file);

      statusEl.className   = "receipt-status uploading";
      statusEl.textContent = "⏳ กำลังบีบอัดรูปภาพ...";
      document.getElementById("open-form-btn").disabled = true;

      try {
        // Compress image
        var base64 = await new Promise(function(resolve) {
          var img = new window.Image();
          img.onload = function() {
            var c = document.createElement("canvas");
            var MAX = CONFIG.IMAGE_MAX_PX, w = img.width, h = img.height;
            if (w > MAX || h > MAX) {
              if (w > h) { h = Math.round(h*MAX/w); w = MAX; }
              else       { w = Math.round(w*MAX/h); h = MAX; }
            }
            c.width = w; c.height = h;
            c.getContext("2d").drawImage(img, 0, 0, w, h);
            resolve(c.toDataURL("image/jpeg", CONFIG.IMAGE_QUALITY).split(",")[1]);
          };
          img.src = URL.createObjectURL(file);
        });

        statusEl.textContent = "⏳ กำลังอัพโหลด...";

        // Upload to Cloudinary
        var formData = new FormData();
        formData.append("file", "data:image/jpeg;base64," + base64);
        formData.append("upload_preset", CONFIG.CLOUDINARY_PRESET);
        formData.append("folder", "bntires_receipts");

        var res  = await fetch("https://api.cloudinary.com/v1_1/" + CONFIG.CLOUDINARY_CLOUD + "/image/upload", {method:"POST", body:formData});
        var data = await res.json();
        if (data.error) throw new Error(data.error.message || "Cloudinary failed");

        // Store FULL secure_url
        window.receiptUrl = data.secure_url;

        // Save to GAS (non-blocking)
        jsonp(
          CONFIG.GAS_API_URL + "?action=saveReceiptUrl&carId=" + encodeURIComponent(window.currentCarId) + "&url=" + encodeURIComponent(window.receiptUrl),
          function(r) { console.log("GAS save:", r.ok ? "ok" : r.error); },
          function(e) { console.log("GAS save error:", e); }
        );

        window.receiptReady = true;
        areaEl.classList.add("has-photo");
        statusEl.className   = "receipt-status ok";
        statusEl.textContent = "✅ อัพโหลดสำเร็จ";
        document.getElementById("open-form-btn").disabled    = false;
        document.getElementById("open-form-btn").textContent = "🔗 เปิดฟอร์มลงทะเบียน " + (window.selectedBrand ? window.selectedBrand.name : "");

      } catch(err) {
        statusEl.className   = "receipt-status error";
        statusEl.textContent = "❌ อัพโหลดไม่สำเร็จ: " + err.message;
      }
    };
    console.log("handleReceiptPhoto patched!");
  }, 500);
});
