const Destination = require("../models/destinationModel");

// Get all popular destinations
exports.getDestinations = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const skip = (page - 1) * limit;
  try {
    const total = await Destination.countDocuments();
    const allDestinations = await Destination.find().skip(skip).limit(limit);
    res.status(200).json({
      data: allDestinations,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};