const TourPackage = require("../models/tourPackageModel");

// Get all top-selling tourPackages
exports.getTourPackages = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const skip = (page - 1) * limit;
  try {
    const total = await TourPackage.countDocuments();
    const allTourPackages = await TourPackage.find().skip(skip).limit(limit);
    res.status(200).json({
      data: allTourPackages,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
