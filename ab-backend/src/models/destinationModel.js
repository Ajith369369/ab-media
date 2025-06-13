const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  destinationName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Destination", destinationSchema);
