const express = require("express");
const { getFoodData } = require("../controllers/foodController");

const router = express.Router();

// Route to fetch food data and save to MongoDB
router.get("/food", getFoodData);

module.exports = router;
