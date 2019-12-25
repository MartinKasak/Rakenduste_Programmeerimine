const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("./item.model.js");
//const Title = require("./item.model.js");


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

/**Loome uue nime arvestus 13 
 * router.put("/items/:itemId/title", (req, res) =>{
    const newTitle = new Title(req.body);
    newTitle.save (err => {
        if(err){
            console.log("Error: ", err);
            res.sendStatus(500);
            return;
        }
        console.log("Success createdTitle");
        res.sendStatus(201);
    });
});**/
 


/*katsetus arvestus 13
 */

router.post("/:itemId", async (req, res) => {
    const pealkiri = await Item.findOne({ _id: req.params.itemId});
    pealkiri.title = req.body.vahetaTitle;
    await pealkiri.save();

    if (pealkiri.title !== req.body.vahetaTitle) {

      return res.status(500).send("Error");
    }
    res.sendStatus(200);
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