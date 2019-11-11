var express = require ("express");
var router = express.Router();
var path = require("path");

//Directs user to home page as a default route//
router.use(function(req,res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});
//Exporting Routes//
module.exports = router;