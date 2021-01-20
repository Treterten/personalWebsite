"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.resolve(__dirname, '../client/public')));
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.status(200);
});
app.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log("App is listening on " + PORT);
});
