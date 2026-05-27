const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// REGISTER USER
const registerUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Hash password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword
    });

    // Send response
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id)
    });

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }

};

// LOGIN USER
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {

      return res.status(401).json({
        message: 'Fel email eller lösenord'
      });

    }

    // Compare password
    const isMatch = await user.matchPassword(password);

    // Wrong password
    if (!isMatch) {

      return res.status(401).json({
        message: 'Fel email eller lösenord'
      });

    }

    // Login success
    res.status(200).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id)
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  registerUser,
  loginUser
};