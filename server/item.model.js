const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema ({ 
    imgSrc: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now}, 
});

itemSchema.statics.getItems = function(itemIds) {
    return new Promise((resolve, reject) => {
        const query = itemIds.map(id => mongoose.Types.ObjectId(id));
        this.find({
            "_id":{
            $in:query    
            }    
        },(err,docs)=>{
            if(err){
                console.log(err);
                return reject("Failed to get items");

            }
            resolve(docs);
        });
    });
};

const Item = mongoose.model("Item", itemSchema);

module.exports = Item; 