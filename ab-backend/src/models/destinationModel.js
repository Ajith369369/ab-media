const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  destinationImage: {
    type: String,
    required: true,
  },
  destinationName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Destination", destinationSchema);
