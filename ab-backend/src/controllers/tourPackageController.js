const TourPackage = require("../models/tourPackageModel");

// Get all top-selling tourPackages
exports.getTourPackages = async (req, res) => {
  try {
    const allTourPackages = await TourPackage.find();
    res.status(200).json(allTourPackages);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};