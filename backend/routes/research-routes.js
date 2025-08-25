const express = require("express");
const {
  getCompetitors,
  getMarket,
  getPricing,
  getSuccess,
  getAudience,
  getTech,
  getTimeline,
  getTeam,
  getRoadmap,
} = require("../controllers/research-controller");

const router = express.Router();

// 🔥 Define endpoints
router.post("/competitors", getCompetitors);
router.post("/market", getMarket);
router.post("/pricing", getPricing);
router.post("/success", getSuccess);
router.post("/audience", getAudience);
router.post("/tech", getTech);
router.post("/timeline", getTimeline);
router.post("/team", getTeam);
router.post("/roadmap", getRoadmap);

module.exports = router;
