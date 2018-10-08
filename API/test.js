var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
app.use(bodyParser.json());
var fs = require('fs');
var path = __dirname + "/img/";
var array = [
    {title: 'hi', content: 'stuff goes here', foot: 'foot'},
    {title: 'elem 2', content: 'stuff lives here', foot: 'foot number2'}
]

router.get('/', (req, res) => {
    res.send(array)
})

module.exports = router;