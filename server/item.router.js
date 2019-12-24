const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("./item.model.js");


router.delete("/items/:itemId", (req, res) => {
    Item.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.itemId)}, (err) => {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } 
        console.log("Deletion successful");
        return res.sendStatus(204);
    });
});


/*
Loome uue itemi arvestus 9 dets
 */

router.post("/", (req, res) =>{
    const newItem = new Item(req.body);
    newItem.save (err => {
        if(err){
            console.log("Error: ", err);
            res.sendStatus(500);
            return;
        }
        console.log("Success createdItem");
        res.sendStatus(201);
    });
});


/** Returns an item */
router.get("/:itemId",(req, res)=>{
    Item.findById(req.params.itemId, function(err, item) {
        if(err){
            console.log("Error: ", err);
            res.status(500).send(err);
            return;
        }
        res.send(item);
    });
});

/**
 * Returns all items
 */
router.get("/",(req, res)=>{
    Item.find({}, function(err, items){
        if(err){
            console.log("Error: ", err);
            res.status(500).send(err);
            return;
        }
        res.send(items);
    });
});

module.exports = router;