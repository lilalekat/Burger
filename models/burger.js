var orm = require('../config/orm.js');

//inserting scrumptious_burgers table to orm to connect with the controller routes which is burger_controllers.js//
var burger = {
    all: function(cb){
        orm.all('scrumptious_burgers',function(res){
            cb(res);
        })
    }
}

module.exports = burger;