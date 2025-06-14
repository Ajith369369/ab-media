const express = require("express");
const {
  getTourPackages,
} = require("../controllers/tourPackageController");

const router = express.Router();

router.get("/packages/top-selling", getTourPackages);

module.exports = router;
