const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const {signup, signin} = require("../controllers/auth");

router.post("/signup", [
    check("firstName", "fistName should have atleast 3 character").isLength({min: 3}),
    check("lastName", "lastName should have atleast 1 character").isLength({min: 1}),
    check("email", "Enter the valid email address").isEmail(),
    check("password", "Password should be atleast 3 character").isLength({min: 3})
], signup);

router.post("/signin", [
    check("email", "Enter the valid email address").isEmail(),
    check("password", "Password should be atleast 3 character").isLength({min: 3})
], signin);


module.exports = router;