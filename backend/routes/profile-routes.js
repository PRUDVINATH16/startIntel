const express = require('express');
const router = express.Router();
const userController = require('../controllers/profile-controller');

// POST /api/users/update-username
router.post('/update-username', userController.updateUsername);

module.exports = router;