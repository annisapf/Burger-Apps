// Set up MySQL connection.
var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    /*
    AWS connection
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burger_app_db"
    });
    */
    var connection = mysql.createConnection({
        host: "erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "w9cqwyacxgz9e6b3",
        password: "re3ioce3h1nl1xdl",
        database: "doe5c0hpd3jfno66"
    });
};


// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
