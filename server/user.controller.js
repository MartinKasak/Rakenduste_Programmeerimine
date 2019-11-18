const User = require("./user.model");
const jwt = require("jsonwebtoken");
const JWT_PRIVATE_KEY = "secretpass123";

exports.login=(req, res) => {
    User.login(req.body)
    .then( user => {
        jwt.sign(user, JWT_PRIVATE_KEY, function(err, token) {
            if(err) {
                return res.status(500);
            }
            res.status(200).send({
                user,
                token, 
            });
        });
    })
    .catch( err => {
        res.send(401);
    });
};

exports.signup = (req, res) => {
    User.signup(req.body)
    .then( user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.send(500);
    }); 
}; 