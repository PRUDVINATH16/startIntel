const StartupReport = require('../models/report');

exports.saveStartupReport = async (req, res) => {
  try {
    const { mobile, idea, result } = req.body;
    console.log("Received report data:", { mobile, idea, result });
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
    const { mobile } = req.params;
    const reports = await StartupReport.find({ mobile }).sort({ createdAt: -1 });

    if (!reports.length) {
      return res.status(404).json({ error: "No reports found" });
    }

    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "❌ Failed to fetch reports" });
  }
};
