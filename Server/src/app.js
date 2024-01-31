import express from "express";
import cors from "cors";
import { UserDetails } from "./models/userDetails.model.js";
import { allfoods } from "./models/allfoods.model.js";

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
    return res.status(200).json({ user, usernameIn });
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
    };

    const food = await allfoods.create(newfood);
    return res.status(201).send(food);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//getting foods from DB
app.get("/foods", async (req, res) => {
  try {
    const foods = await allfoods.find({});
    console.log("DB.find() Called");
    res.json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export { app };
