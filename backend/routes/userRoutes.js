import express from "express";

const router = express.Router();


// TEST ROUTE

router.get("/", (req, res) => {

  res.send("User route works");

});


// REGISTER USER

router.post("/register", (req, res) => {

  res.status(201).json({

    token: "testtoken"

  });

});


// LOGIN USER

router.post("/login", (req, res) => {

  res.status(200).json({

    token: "testtoken"

  });

});


export default router;