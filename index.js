const express = require("express");
const app = express();
const cors = require("cors");
// const path = require("path");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const portfolioRoutes = require("./routes/portfolioRoutes");
const userModel = require("./models/userModel");
connectDB();

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "./portfolio-client/dist")));

app.use("/api/v1/portfolio", portfolioRoutes);

app.get("*", function (req, res) {
  // res.sendFile(path.join(__dirname, "./portfolio-client/dist/index.html"));
});

app.get("/", (req, res) => {
  res.send("api called");
});

app.listen(port, () => {
  console.log(`server running on the port http://localhost:${port}`);
});
