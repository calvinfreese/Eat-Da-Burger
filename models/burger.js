const orm = require('../config/orm')

let burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insert: function(vals, cb){
        orm.insertOne("burgers", vals, function(res){
            cb(res);
        });
    },
    update: function(objColVal, condition, cb){
        orm.updateOne("burgers", objColVal, condition, function(res){
            cb(res);
        });
    }
}



module.exports = burger;