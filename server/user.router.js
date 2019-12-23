const express = require("express");
const router = express.Router();
const User = require("./user.model.js");
const Item = require("./item.model.js");
const {authMiddleware} = require("./middlewares.js");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

router.param("userId", (req, res, next, userId) => {
    User.findById(userId, (err, user) => {
        if(err || !user) return res.status(500).send("Error on user param");
        req.user = user;
        next();
    });
});

router.param("itemId", (req, res, next, itemId) => {
    Item.findById(itemId, (err, item) => {
        if(err || !item) return res.status(500).send("Error on item param");
        req.item = item;
        next();
    });
});

/** Returns an user object */
router.get("/:userId", authMiddleware, (req, res) => {
    res.send(req.user);
});

/** Add an item to a cart */
router.put("/:userId/cart/:itemId", (req, res) => {
    req.user.cart.push(req.item._id.toString());
    req.user.save((err) => {
        if(err) {
            console.log(err);
            return res.status(500).send("Error on cart save");
        }
        res.send(200);
    });
});

/** Add user  */
router.post("/", (req, res) => {
    const user1 = new User(req.body);
	user1.save( err => {
        if(err){
			console.log("Error", err);
			res.send(500);
			return;
		}
		console.log("Success create");
		res.send(201);
	});
});
 
/** Remove an item from a cart */
router.delete("/:userId/cart/:itemId", (req, res) => {
    const index = req.user.cart.findIndex(itemId => itemId === req.item._id.toString());
    req.user.cart.splice(index, 1);

    req.user.save((err) => {
        if(err) {
            console.log(err);
            return res.status(500).send("Error on cart save");
        }
        res.send(200);
    });
});

/**get all users**/
router.get("/", (req, res) => {
    User.find({}, (err, docs) => {
        if(err) return handleError(err, res);
        res.status(200).json(docs);
    });
});


/*Delete all users*/
router.delete("/", (req, res) => {
    User.deleteMany({}, (err, docs) => {
        if(err) return handleError(err, res);
        console.log(docs);
        console.log("User delete success");
        res.send(204);
    });
});

function handleError(err,res) {
    console.log(err);
    res.send(500);
}

router.post("/:userId/checkout", authMiddleware, async(req, res) => {
    //console.log(req.body);
    const {error, amount} = await req.user.getCartAmount();
    if(error) return res.send(500);
    req.user.createPayment(amount)
    .then(()=> {
        return req.user.clearCart();
    })
    .then(() => {
            return stripe.charges.create({
            amount: amount *100,
            currency: "eur",
            source: req.body.id,
          });
    }) 
    .then(stripeResponse =>{
        console.log("stripe res", stripeResponse);
        res.send(200);
    })
    .catch(() => {    
        res.send(500);
    });
});


module.exports = router; 