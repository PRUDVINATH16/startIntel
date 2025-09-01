const express = require('express');
const router = express.Router();
const { saveStartupReport, getReportsByMobile } = require('../controllers/report-controller');

router.post('/save-report', saveStartupReport);
router.get('/reports/:mobile', getReportsByMobile);

module.exports = router;
