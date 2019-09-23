const express = require('express')
const app = express()
const path = require("path");
const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "static", "index.html"));
})

app.use(express.static("static"));

app.listen(process.env.PORT || PORT, () => {
    console.log("Server started", PORT);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))