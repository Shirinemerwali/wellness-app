const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {

  let token;

  // Kolla om token finns i headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {

    try {

      // Hämta token
      token = req.headers.authorization.split(' ')[1];

      // Verifiera token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Hämta användaren från databasen
      req.user = await User.findById(decoded.id).select('-password');

      // Gå vidare till nästa funktion
      next();

    } catch (error) {

      res.status(401).json({
        message: 'Inte behörig, token failed'
      });

    }

  }

  // Om token saknas
  if (!token) {

    res.status(401).json({
      message: 'Inte behörig, ingen token'
    });

  }

};

module.exports = { protect };