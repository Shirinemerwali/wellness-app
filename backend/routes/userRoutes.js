import express from "express";

const router = express.Router();


// TEST

router.get("/", (req, res) => {

  res.send("User route works");

});


// REGISTER

router.post("/register", (req, res) => {

  res.json({

    token: "testtoken"

  });

});


// LOGIN

router.post("/login", (req, res) => {

  res.json({

    token: "testtoken"

  });

});

export default router;