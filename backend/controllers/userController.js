import User from "../models/User.js";

import bcrypt from "bcryptjs";

import generateToken from "../utils/generateToken.js";


// REGISTER USER

const registerUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // CHECK IF USER EXISTS

    const userExists = await User.findOne({ email });

    if (userExists) {

      return res.status(400).json({

        message: "User already exists"

      });

    }

    // HASH PASSWORD

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(
      password,
      salt
    );

    // CREATE USER

    const user = await User.create({

      email,

      password: hashedPassword

    });

    // RESPONSE

    res.status(201).json({

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


// LOGIN USER

const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // FIND USER

    const user = await User.findOne({ email });

    // CHECK USER

    if (!user) {

      return res.status(401).json({

        message: "Invalid credentials"

      });

    }

    // CHECK PASSWORD

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(401).json({

        message: "Invalid credentials"

      });

    }

    // RESPONSE

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


export {
  registerUser,
  loginUser
};