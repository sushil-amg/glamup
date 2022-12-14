//fileupload
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const filter = function (req, file, cb) {
  if ((file.minetype == "image/png", "image/jpg")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage:storage, fileFilter:filter });
module.exports = upload;
