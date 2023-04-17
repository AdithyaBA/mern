const User = require("../models/user");
const {validationResult} = require("express-validator");

// signup controller
exports.signup = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const user = new User(req.body);
    user.save().then((user) => {
        return res.status(200).json({
            user
        })
    }).catch((err) => {
        console.log("ERROR", err);
        return res.status(400).json({
            error: "Not able to save user in DB"
        })
    })
}

// Signin controller
exports.signin = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const {email, password} = req.body;
    console.log(email);
}