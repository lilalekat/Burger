//Dependencies//

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

var db = require("./models");

//Express App Dependencies//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//Routes//
require("./routes/html-routes.js")(app);
require("./routes/post-api-routes.js")(app);

//DB Sync//
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });