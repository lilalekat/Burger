var mysql = require ('mysql');

//MySQL DB Connection Info and Error Message Handling//
var connection = mysql.createConnection({
    host: "127.0.0.1",

    port: 3306,

    user: "root",

    password: "Password123",
    database: "burgers_DB"
})

//Connecting to DB//
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    console.log("Time to Eat the Burger!! Nom Nom Nom!!!" + "\n");
});

module.exports = connection;