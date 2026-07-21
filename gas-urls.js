// ============================================================
//  Shared GAS endpoint URLs — SINGLE SOURCE OF TRUTH
//  Edit ONLY this file when a deployment URL changes.
//  Hosted at: https://bntires.github.io/Member_Scanner/gas-urls.js
//
//  Used by (via <script src="...gas-urls.js">):
//    - Member_Scanner/index.html + config.js
//    - MEMBER/index.html
//
//  The Chrome extension (content.js / content_conti.js) CANNOT use
//  this file directly (Chrome policy blocks extensions from loading
//  remote executable code) — it instead fetches gas-urls.json below,
//  which holds the exact same values as plain data. Keep both files
//  in sync whenever a URL changes.
//
//  ★ FIXED: the two URLs below were swapped (each one was assigned to
//  the WRONG key — warrantyApi held the Member Portal API's URL and
//  vice versa). This caused the register page's brand dropdown to hit
//  the Warranty API (no getCarData handler → "ไม่พบ action หรือ carId"),
//  and the staff scanner's QR/tire-brand calls to hit the Member Portal
//  API instead (no lookupCarId/getMemberCars handler there). Verify each
//  URL below against its own comment before saving, since this is exactly
//  the kind of mismatch that's bitten this project before.
// ============================================================

var GAS_URLS = {
  // Apps Script project titled "Member" — contains the Warranty API /
  // QR-scanner backend: pushUrl, popUrl, lookupCarId, getMemberCars,
  // getBrands, getTires, saveWarrantyNumber, updateCarMileage
  warrantyApi: "https://script.google.com/macros/s/AKfycbwTYVRQqa7OZk-6ASSKwHGCZ2FYBuz09O8L-ssKLJy-2jvkC44yCNH8EvqDV_pfBlSy/exec",

  // Apps Script project titled "Member_Scanner" — contains the Member
  // Portal API backend: checkLineUser, saveMember, updateMember, addCar,
  // deleteCar, updateCarInfo, getMemberByQR, getCarData (→ getCarBrandsData)
  memberPortalApi: "https://script.google.com/macros/s/AKfycbwQCqgCoqUkuwmbNvBMrXLIs28JRaibka-FmhxcqOqVOXBZID5ddjSeQ_1y3Q_waHo0cg/exec"
};
