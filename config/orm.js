const connection = require('../config/connection');


let orm = {
    all: function(tableName, cb) {
        let queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;