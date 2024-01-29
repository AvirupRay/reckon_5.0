import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/db.js";

dotenv.config({
  path: "../env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    //to check if get is working!!
    // app.get("/users", (req, res) => {
    //   res.send(" who the f is user?");
    // });
  })
  .catch((err) => {
    console.log("MONGODB Connection failed!", err);
  });

//basic check is app listen and ports are working fine!! (yes)
// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("HUH Bro!!");
// });

// app.listen(PORT, () => {
//   console.log(`listening on port: ${PORT}`);
// });
