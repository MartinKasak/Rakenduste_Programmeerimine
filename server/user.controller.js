const User = require("./user.model.js");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    User.login(req.body)
    .then(user => {
        jwt.sign(user, process.env.JWT_KEY, function(err, token) {
            if(err) {
                console.log("err", err);
                return res.status(500).send(err);
            }
            res.status(200).send({user, token});
        });
    }).catch(err => {
        res.status(401).send(err);
    });
};

exports.signup = (req, res) => {
    User.signup(req.body)
    .then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).send(err);
    });
};