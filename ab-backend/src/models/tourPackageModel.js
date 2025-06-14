const mongoose = require("mongoose");

const tourPackageSchema = new mongoose.Schema({
  tourPackageImage: {
    type: String,
    required: true,
  },
  tourPackageName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TourPackage", tourPackageSchema);
