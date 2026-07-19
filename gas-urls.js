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
// ============================================================

var GAS_URLS = {
  // Apps Script project titled "Member" — contains the Warranty API /
  // QR-scanner backend: pushUrl, popUrl, lookupCarId, getBrands, getTires,
  // saveWarrantyNumber, updateCarMileage
  warrantyApi: "https://script.google.com/macros/s/AKfycby590f3Qurk4MPITiWeZ7kkW5DAn1RZ9iKOVhrAoglyKoOI0SlEXU_IGilEEqaNcec0cw/exec",

  // Apps Script project titled "Member_Scanner" — contains the Member
  // Portal API backend: checkLineUser, saveMember, updateMember, addCar,
  // deleteCar, getMemberByQR, getCarData
  memberPortalApi: "https://script.google.com/macros/s/AKfycbwisNTnsUD61a2HjFbXHl4SMSKgdm24b69HURQzM9SIQj80kPFtWOyFEIxKgr_drWZb/exec"
};
