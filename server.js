//Dependencies//

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
app.use(express.static(__dirname + '/public'));

var db = require("./models/burger");

//Express App Dependencies//
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

//Routes Requirement//
var routes = require("./controllers/burgers_controllers.js");
app.use('/', routes);

var PORT = process.env.PORT || 3000;

//DB Sync//
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });

