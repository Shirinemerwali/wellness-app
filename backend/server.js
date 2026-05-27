import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import mealRoutes from "./routes/mealRoutes.js";

dotenv.config();

const app = express();


// MIDDLEWARE

app.use(cors());

app.use(express.json());


// ROUTES

app.use("/api/users", userRoutes);

app.use("/api/meals", mealRoutes);


// TEST ROUTE

app.get("/", (req, res) => {

  res.send("API is running");

});


// DATABASE CONNECTION

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB connected");

  app.listen(process.env.PORT, () => {

    console.log(
      `Server running on port ${process.env.PORT}`
    );

  });

})

.catch((error) => {

  console.log(error);

});


// EXPORT APP FOR TESTING

export default app;