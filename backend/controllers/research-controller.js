const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const PYTHON_API = "https://startintel-ai.onrender.com"; // Flask AI backend

// Helper function
async function callPython(path, body) {
  try {
    const response = await fetch(`${PYTHON_API}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (err) {
    console.error(`❌ Error calling ${path}:`, err.message);
    return { error: err.message };
  }
}

// Controllers
exports.analyzeIdea = async (req, res) => {
  const result = await callPython("/analyze", req.body);
  res.json(result);
};

exports.getCompetitors = async (req, res) => {
  const result = await callPython("/competitors", req.body);
  res.json(result);
};

exports.getMarket = async (req, res) => {
  const result = await callPython("/market", req.body);
  res.json(result);
};

exports.getPricing = async (req, res) => {
  const result = await callPython("/pricing", req.body);
  res.json(result);
};

exports.getSuccess = async (req, res) => {
  const result = await callPython("/success", req.body);
  res.json(result);
};

exports.getAudience = async (req, res) => {
  const result = await callPython("/audience", req.body);
  res.json(result);
};

exports.getTech = async (req, res) => {
  const result = await callPython("/tech", req.body);
  res.json(result);
};

exports.getTimeline = async (req, res) => {
  const result = await callPython("/time-budget", req.body);
  res.json(result);
};

exports.getTeam = async (req, res) => {
  const result = await callPython("/team", req.body);
  res.json(result);
};

exports.getRoadmap = async (req, res) => {
  const result = await callPython("/roadmap", req.body);
  res.json(result);
};