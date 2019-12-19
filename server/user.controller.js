const User = require("./user.model.js");
const jwt = require("jsonwebtoken");

exports.login=(req, res) => {
    //console.log("login", req.body);
    User.login(req.body)
    .then( user => {
        jwt.sign(user, process.env.JWT_KEY, function(err, token) {
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