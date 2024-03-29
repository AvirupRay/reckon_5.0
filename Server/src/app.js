import express from "express";
import cors from "cors";
import { UserDetails } from "./models/userDetails.model.js";
import { allfoods } from "./models/allfoods.model.js";
import { allReviews } from "./models/reviewDetails.model.js";

const app = express();

app.use(cors());

app.use(express.json());

//Registering User Info

app.post("/userinfo", async (req, res) => {
  try {
    if (
      (!req.body.username,
      !req.body.email,
      !req.body.password,
      !req.body.collector)
    ) {
      return res.status(400).send({ message: "send all required fields" });
    }
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      collector: req.body.collector,
    };

    const user = await UserDetails.create(newUser);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//finding data by id from db
app.get("/userinfo/login/:username", async (req, res) => {
  try {
    const usernameIn = req.params.username;
    const user = await UserDetails.findOne({ username: usernameIn });
    return res.status(200).json(user);
  } catch (error) {
    console.error("User Finding Issue!!", error.message);
  }
});

// //routes import
// import userRouter from "./routes/user.routes.js";

// //routes declaration
// app.use("/api/v1/users", userRouter);

//posting the foods from supplier page to DB
app.post("/foods", async (req, res) => {
  try {
    if ((!req.body.name, !req.body.quantity, !req.body.date)) {
      return res.status(400).send({ message: "send all required fields" });
    }
    const newfood = {
      name: req.body.name,
      quantity: req.body.quantity,
      date: req.body.date,
      stock: req.body.stock,
      location: req.body.location,
      details: req.body.details,
      username: req.body.username,
    };

    const food = await allfoods.create(newfood);
    return res.status(201).send(food);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//getting foods from DB
app.get("/foods/:username", async (req, res) => {
  try {
    const usernameIn = req.params.username;
    // const foods = await allfoods.find({});
    const foodDetails = await allfoods.find({ username: usernameIn });
    console.log("DB.find() Called");
    res.status(200).json(foodDetails);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/foodList", async (req, res) => {
  try {
    // const usernameIn = req.params.username;
    const foods = await allfoods.find({});
    // const foodDetails = await allfoods.find({ });
    console.log("DB.find() Called");
    res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.post("/review", async (req, res) => {
  try {
    if ((!req.body.name, !req.body.email, !req.body.message)) {
      return res.status(400).send({ message: "send all required fields" });
    }
    const newReview = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    };

    const review = await allReviews.create(newReview);
    return res.status(201).send(review);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export { app };
