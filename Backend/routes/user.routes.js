const express = require("express");
const { getMessage, userSignup, userLogin } = require("../controllers/user.controllers.js");
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

module.exports = router;