const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

const itemRouter = require("./item.router.js");

const authRouter = require("./auth.router.js");
const userRouter = require("./user.router.js");
const database = require("./database.js");
const bodyParser= require("body-parser");

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
  }

  /** For images and bundle.js */
app.use("/static", express.static("dist/static"));


/** For index.html */
app.use("/*", express.static("dist"));

app.use(bodyParser.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1", itemRouter);
app.use("/api/v1/users", userRouter);

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


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get("/items/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});


