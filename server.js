import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./user-model.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// const mongoURI =
//   "mongodb+srv://syronxnepal:5r9VJ2WRI8p5z7Qf@syronx.xclbvgv.mongodb.net/?retryWrites=true&w=majority";
// mongoose
//   .connect(mongoURI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.get("/api/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// app.get("/api/users/:id", async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.json(user);
// });

// app.post("/api/users", async (req, res) => {
//   const { name, email } = req.body;
//   const user = new User({ name, email });
//   await user.save();
//   res.json(user);
// });

// app.put("/api/users/:id", async (req, res) => {
//   const { name, email } = req.body;
//   const user = await User.findByIdAndUpdate(
//     req.params.id,
//     { name, email },
//     { new: true }
//   );
//   res.json(user);
// });

// app.delete("/api/users/:id", async (req, res) => {
//   const user = await User.findByIdAndDelete(req.params.id);
//   res.json(user);
// });

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
