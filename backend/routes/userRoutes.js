import express from "express";

import {
  registerUser,
  loginUser
} from "../controllers/userController.js";

const router = express.Router();


// TEST ROUTE

router.get("/", (req, res) => {

  res.send("User route works");

});


// REGISTER USER

router.post("/register", registerUser);


// LOGIN USER

router.post("/login", loginUser);


export default router;