// const express = require("express");
// const userModel = require("../models/userModel");

// const homeP = async (req, res) => {
//   try {
//     res.send("HOme Page");
//   } catch (e) {
//     res.send("Error Page");
//   }
// };

// const reqisterUser = async (req, res) => {
//   try {
//     const { name, userName, password } = req.body;
//     const user = await userModel({ name, userName, password });
//   } catch (e) {
//     console.log(e);
//   }
// };
// module.exports = { reqisterUser, homeP };
