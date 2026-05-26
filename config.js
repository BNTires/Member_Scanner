// ============================================================
//  Tyre Warranty — Config File
//  แก้ไขค่าต่างๆ ที่นี่เพียงที่เดียว
// ============================================================

var CONFIG = {

  // ── Google Apps Script API URL ──
  // อัพเดทหลังจาก deploy ใหม่ทุกครั้ง
  GAS_API_URL: "https://script.google.com/macros/s/AKfycby9dFvl_3KXOMqPpHprpxl5EEug41e4Q6Ltb0noQJleo_b06DNWCo3EfOLnlMk-7ahldA/exec",

  // ── Cloudinary Config ──
  // https://cloudinary.com → Dashboard
  CLOUDINARY_CLOUD: "dqgszn5b1",
  CLOUDINARY_PRESET: "Bntires",

  // ── Shop Info ──
  SHOP_NAME:     "B.N.Tires&Max",
  SHOP_PROVINCE: "สมุทรปราการ",

  // ── Receipt Settings ──
  RECEIPT_EXPIRY_SECONDS: 3600,  // auto-delete from ImgBB after 1 hour
  IMAGE_MAX_PX:           800,   // max image size (width or height)
  IMAGE_QUALITY:          0.7,   // JPEG quality 0.1-1.0

  // ── Desktop Poller ──
  POLL_INTERVAL_MS:  3000,  // how often desktop checks for new forms (ms)
  WAITING_TIMEOUT_S: 30,    // how long phone waits before showing error (seconds)

  // ── Warranty Brands ──
  // active: true = show as clickable, false = show as "เร็วๆ นี้"
  BRANDS: [
    { id:"atlas",  name:"Atlas",   url:"https://members.llit-eservice.com/register/year/atlas/", active:true  },
    { id:"b",      name:"Brand B", url:"", active:false },
    { id:"c",      name:"Brand C", url:"", active:false },
    { id:"d",      name:"Brand D", url:"", active:false }
  ]

};
