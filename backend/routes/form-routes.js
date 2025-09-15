const express = require('express');
const router = express.Router();
const formController = require('../controllers/form-controller');

// POST /api/form/send
router.post('/send', formController.sendSurvey);

module.exports = router;