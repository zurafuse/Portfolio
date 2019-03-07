const express = require("express");
const port = process.env.PORT || 3000;
const ejs = require("ejs");
const app = express();
const httpController = require("./controller/httpController");

app.use("/", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

httpController(app);

app.listen(port);
