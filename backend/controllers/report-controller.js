const StartupReport = require('../models/report');

exports.saveStartupReport = async (req, res) => {
  try {
    const { mobile, idea, result } = req.body;
    const report = await StartupReport.create({ mobile, idea, result });
    console.log("report saved");

    res.status(201).json({
      message: "Report saved successfully",
      reportId: report._id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "❌ Failed to save report" });
  }
};

exports.getReportsByMobile = async (req, res) => {
  try {
    const { mobile } = req.body;

    // Get only `idea` field, no _id or other fields
    const reports = await StartupReport.find({ mobile })
      .select("idea -_id")
      .sort({ createdAt: -1 });

    if (!reports.length) {
      return res.status(404).json({ error: "No reports found" });
    }

    // Extract only ideas into a simple array
    const ideas = reports.map(report => report.idea);

    res.json(ideas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "❌ Failed to fetch reports" });
  }
};


exports.getReportByIdea = async (req, res) => {
  try {
    const { mobile, idea } = req.body;

    const report = await StartupReport.findOne({ mobile, idea }).sort({ createdAt: -1 });

    if (!report) {
      return res.status(404).json({ error: "No report found for this idea" });
    }

    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "❌ Failed to fetch report" });
  }
};

exports.checkIdea = async (req, res) => {
  try {
    const { idea } = req.body;

    const report = await StartupReport.findOne({ idea });

    if (!report) {
      return res.json({ message: "No" });
    }

    res.json({ message: "Yes" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "❌ Failed to fetch report" });
  }
};