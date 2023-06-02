const express = require("express");
const {reqisterUser} = require("../controllers/userController")
const router = express.Router();

router.get("/")

router.post("/register", reqisterUser);

module.exports = router;
