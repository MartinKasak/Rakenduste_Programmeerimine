const User = require("./user.model");


exports.login=(req, res) => {
    User.login(req.body)
    .then( user => {
        res.json(user);
    })
    .catch( err => {
        res.send(500);
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