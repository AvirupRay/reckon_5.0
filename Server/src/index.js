import dotenv from "dotenv";
import { app } from "./app.js";
// import connectDB from "./db/dbLink.js";
import connectDB from "./db/dblink.js";

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
  })
  .catch((err) => {
    console.log("MONGODB Connection failed!", err);
  });

// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("HUH Bro!!");
// });

// app.listen(PORT, () => {
//   console.log(`listening on port: ${PORT}`);
// });
