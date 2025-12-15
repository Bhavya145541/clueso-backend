const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// routes & middleware imports
const authRoutes = require("./routes/authroutes");
const authMiddleware = require("./middleware/authmiddleware");

// auth routes
app.use("/api/auth", authRoutes);

// 🔒 protected route
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

// test route
app.get("/health", (req, res) => {
  res.send("Server is running");
});

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
