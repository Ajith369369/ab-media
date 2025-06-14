const Destination = require("../models/destinationModel");

// Get all popular destinations
exports.getDestinations = async (req, res) => {
  try {
    const allDestinations = await Destination.find();
    res.status(200).json(allDestinations);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};