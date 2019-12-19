if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

const express = require("express");
const app = express();
const apiRouter = require("./apiRouter.js");

const database = require("./database.js");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(apiRouter);


/** For images and bundle.js */
app.use("/static", express.static("dist/static"));

/** For index.html */
app.use("/*", express.static("dist"));

function listen(){
  app.listen(PORT, () => {
      console.log("Server started");
      console.log(`http://localhost:${PORT}`);
  });
}

database.connect()
  .then(() => {
      listen();
  })
  .catch(err => {
      console.log("Error on database connection: ", err);
  });


// Old code below, possibly unused
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get("/items/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});