import express from "express";
import cors from "cors";
import { UserDetails } from "./models/userDetails.model.js";

const app = express();

app.use(cors());

app.use(express.json());

export { app };

//testing User Info

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
