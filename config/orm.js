var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.table(result);
        });
    },
    insertOne: function(tableTwoForeignKey, tableOne, tableTwo) {
        //SELECT * FROM clients LEFT JOIN parties ON parties.client_id = clients.id
        var queryString = "SELECT * FROM ?? LEFT JOIN ?? ON ??.?? = ??.id"
        connection.query(
            queryString, [tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne],
            function(err, result) {
                if (err) throw err;
                console.table(result);
            }
        );
    },
    updateOne: function(tableOneCol, tableOne) {
        var queryString =
            "SELECT ?? FROM ??";

        connection.query(
            queryString, [tableOneCol, tableOne],
            function(err, result) {
                if (err) throw err;
                console.table(result);
            }
        );
    },

};

module.exports = orm;