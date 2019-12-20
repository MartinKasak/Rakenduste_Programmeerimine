const mongoose = require("mongoose");
const Item = require("./item.model.js");

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-pmrpm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


const connect = () => {
    return mongoose.connect(DB_URL)
    .then(() => {
        console.log("Database access successful");
        //deleteAllItems();
        migrate();
        return true;
    })
    .catch(err => {
        console.log("Database access error: ", err);
    });    
};

function migrate(){ 
    Item.count({}, (err, countNo) => {
        if(err) throw err;
        if(countNo > 0) {
            console.log("Items already exist in mongodb");
            return;
        }
        saveAllItems();
    });
}

//function deleteAllItems(){
  //  Item.deleteMany({}, (err, doc) => {
  //      console.log("err", err, "doc", doc);
    //});
//}

function saveAllItems(){
    console.log("Migration started");
    const items = DB.getItems();
    items.forEach(item => {
        const document = new Item(item);
        document.save ((err) => {
            if(err){
                console.log(err);
                throw new Error("Item save error");
            }
            console.log("Save successful");
        });
    });
}

module.exports = {
    connect,
};