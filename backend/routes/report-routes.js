const express = require('express');
const router = express.Router();
const { saveStartupReport, getReportsByMobile, getReportByIdea, checkIdea  } = require('../controllers/report-controller');

router.post('/save-report', saveStartupReport);
router.post('/reports/', getReportsByMobile);
router.post('/report1', getReportByIdea);
router.post('/check', checkIdea);

module.exports = router;
