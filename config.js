// ============================================================
//  Tyre Warranty — Config File
//  แก้ไขค่าต่างๆ ที่นี่เพียงที่เดียว
// ============================================================

var CONFIG = {

  // ── Google Apps Script API URL ──
  GAS_API_URL: "https://script.google.com/macros/s/AKfycbwyMWsRVoSdFSFYSMtIuU-AEiiBCuB6xUjhg3CQKJBbcqHdLJgeHp-toEqE0lw8o1arqQ/exec",

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
  WAITING_TIMEOUT_S: 30,

  // ── Field map: Left = QR JSON key, Right = URL param sent to extension ──
  // Adjust LEFT side to match your member page JSON keys
  FIELD_MAP: {
    first_name:    "first_name",
    last_name:     "last_name",
    gender:        "gender",
    phone:         "phone",
    // ★ address / province / district / sub_district / zip_code removed —
    //   these are now hardcoded directly in content.js and content_conti.js,
    //   so the QR code no longer needs to carry them.
    plate:         "plate",
    mileage:       "mileage",
    purchase_date: "purchase_date",
    car_brand:     "car_brand",
    car_model:     "car_model",
    car_id:        "car_id",
    receipt_url:   "receipt_url",
    tire_model:    "tire_model",
    tire_width:    "tire_width",
    tire_aspect:   "tire_aspect",
    tire_rim:      "tire_rim",
    birthday:      "birthday",
    email:         "email",
    car_photo_url: "car_photo_url"
  },

  // ── Warranty Brands ──
  // active: true  = clickable card
  // active: false = "เร็วๆ นี้" placeholder
  // useHash: true = params go after # (Continental hash-router)
  BRANDS: [
    {
      id:      "atlas",
      name:    "Atlas",
      url:     "https://members.llit-eservice.com/register/year/atlas/",
      active:  true
    },
    {
      id:      "linglong",
      name:    "Linglong",
      url:     "https://members.llit-eservice.com/register/quality/linglong/",
      active:  true
    },
    {
      id:      "continental",
      name:    "Continental",
      url:     "https://contitcp.com/#!/index",  // ⚠️ confirm exact path if different
      active:  true,
      useHash: true   // extension reads params from hash: #!/index?first_name=...
    },
    {
      id:     "toyo",
      name:   "Toyo",
      url:    "https://warranty.toyotires.in.th/",
      active: true
    },
    {
      id:     "nitto",
      name:   "Nitto",
      url:    "https://warranty.nittotire.in.th/",
      active: true
    },
    {
      id:     "advance",
      name:   "Advance",
      url:    "https://warranty.advancetyre.in.th/",
      active: true
    },
    {
      id:     "nankang",
      name:   "Nankang",
      url:    "https://warranty.nankangtire.in.th/",
      active: true
    },
    {
      id:     "lenso",
      name:   "Lenso",
      url:    "https://www.lensotires.com/Lensowar/",
      active: true
    },
    {
      id:     "giti",
      name:   "Giti",
      url:    "https://www.giti.co.th/registration",
      active: true
    },
    {
      id:     "sailun",
      name:   "Sailun",
      url:    "",      // ⚠️ paste your Google Form URL here
      active: false
    }
  ]

};
