const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));



const blogRoutes =
require("./routes/BlogRoutes");

app.use("/blogs", blogRoutes);



const authRoutes =
require("./routes/AuthRoutes");

app.use("/api", authRoutes);


app.listen(5000, () => {
  console.log("Server Running");
});