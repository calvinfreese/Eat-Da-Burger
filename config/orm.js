let connection = require('../config/connection');


let orm = {
    selectAll: function(tableName, cb) {
        let queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, val, cb) {
        let queryString = `INSERT INTO ${tableName} (burger_name) VALUES (${val});`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, colVal, condition, cb) {
        let queryString = `UPDATE ${tableName} SET devoured = ${colVal} WHERE ${condition};`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;