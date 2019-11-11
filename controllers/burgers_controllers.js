var express = require ("express");
var router = express.Router();
var path = require("path");
var burger = require('../models/burger');

//Directs user to home page as a default route//
//Passes Burger data from burger.js and orm file//
router.use(function(req,res) {
    burger.all(function(burger_data){
        console.log(burger_data);
        res.sendFile(path.join(__dirname + "/public/index.html"));
    })
});
//Exporting Routes//
module.exports = router;