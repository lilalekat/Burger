var connection = require('./connection.js');
//Connection query that selects everything from table that is selected//
var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM '+tableInput+';', function(err,
            result){
                if(err)throw err;
                cb(result)
            })
    }
}