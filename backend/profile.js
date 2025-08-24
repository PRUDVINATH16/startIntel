const express = require('express');
const router = express.Router();
const connectToDB = require('./database/db');
const User = require('./models/users');

// POST /api/profile
router.post('/', async (req, res) => {
  try {
    await connectToDB();
    const { mobile } = req.body;
    const foundUser = await User.findOne({ mobile });

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(foundUser);
  } catch (err) {
    console.error("Error: ", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;