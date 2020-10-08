const orm = require('../config/orm')

let burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    }
}



module.exports = burger;