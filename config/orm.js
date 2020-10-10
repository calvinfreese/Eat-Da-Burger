let connection = require('../config/connection');


 function keyAndValue (obj) {
   let combined = [];

   for (let key in obj) {
     let val = obj[key];
        
     let keyName = Object.keys(obj)[0];

     if (obj[key] === 'true' || obj[key] === 'false'){
        combined.push(keyName + "=" + val);
     } else {
        
        let stringedKey = "'" + keyName + "'";

        let stringedVal = "'" + val + "'";

         combined.push(stringedKey + "=" + stringedVal);
     }
   }
   return combined.toString();
 }


let orm = {
    selectAll: function(tableName, cb) {
        let queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, cols, vals, cb) {
        let queryString = `INSERT INTO ${tableName} (${cols.toString()}) VALUES (?,?);`;

        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err;
            }
            
            cb(result);

        });
    },
    updateOne: function(tableName, objColVals, condition, cb) {
        let queryStringTwo = `Update ${tableName} SET ${keyAndValue(objColVals)} WHERE ${condition};`
        
        connection.query(queryStringTwo, function(err, result) {
        if (err) {
            throw err;
        }
        
        cb(result);
        });
    }
}

module.exports = orm;