const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const userController = require("./user.controller");

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    next();
};

router.post("/login", userController.login);

router.post("/signup", 
[
    check("email").isEmail().normalizeEmail(),
    check("password").isLength( {min:5}).withMessage("Must be atleast 5 chars long")
],
validationMiddleware,
userController.signup
);

module.exports = router; 