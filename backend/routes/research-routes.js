const express = require("express");
const {
  analyzeIdea,
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
router.post("/analyze", analyzeIdea);
router.post("/competitors", getCompetitors);
router.post("/market", getMarket);
router.post("/pricing", getPricing);
router.post("/success", getSuccess);
router.post("/audience", getAudience);
router.post("/tech", getTech);
router.post("/time-budget", getTimeline);
router.post("/team", getTeam);
router.post("/roadmap", getRoadmap);

module.exports = router;