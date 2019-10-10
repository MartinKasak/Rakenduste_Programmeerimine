const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const DB = require("./server/database.js");

app.get("/items", (req, res) => {
  res.json(DB.getItems());
});

app.get("/items/:itemId", (req, res)=>{
  res.send(DB.getItem(req.params.itemId));
});

app.post("/hello", (req, res)=>{
  res.send("post hello");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.use(express.static("dist"));

//heroku needs process.env
app.listen(PORT, () => {
    console.log("Server started", PORT);
    console.log(`http://localhost:${PORT}`);
  });

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))