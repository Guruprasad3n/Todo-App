const express = require("express");
const connectDB = require("./config/db");
const app = express();
const userRouter = require("./routes/userRoute")
const dotenv = require("dotenv").config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Welcome to home page");
// });


// app.use("/api/user", userRouter )


// const PORT = process.env.PORT || 8000;
// app.listen(PORT, (req, res) => {
//   console.log(`Server started in http://localhost:${PORT}`);
// });

