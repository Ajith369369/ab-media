const express = require("express");
const {
  getDestinations,
} = require("../controllers/destinationController");

const router = express.Router();

router.get("/destinations", getDestinations);

module.exports = router;
