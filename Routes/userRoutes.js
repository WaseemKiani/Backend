const express = require("express");
const { loginUser,logout ,registerUser, getUserData, SignUp, getUserDetails } = require("../Controllers/userControllers.js");
const router = express.Router();
const {isAuthenticatedUser} = require("../middleware/auth")

router.route("/registerUser").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logoutUser").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);



module.exports= router