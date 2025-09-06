const User = require('../models/users');

// Update username by mobile
exports.updateUsername = async (req, res) => {
  try {
    const { mobile, username } = req.body;

    if (!mobile || !username) {
      return res.status(400).json({ message: 'Mobile and username are required' });
    }

    const updatedUser = await User.findOneAndUpdate(
      { mobile },              // Find by mobile
      { username },            // Update username
      { new: true }            // Return updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Username updated successfully',
      user: updatedUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};