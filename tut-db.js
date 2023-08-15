var mysql = require('mysql');
// var express = require('express');
// var app = express();

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dolfinz',
    database: 'nodetutorialsdb'
});

// // update table
// con.connect(function (err) {
//     if (err) throw err;
//     var sql = "UPDATE customers SET address = 'Strandfontein' WHERE address = 'Highway 65'";

//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result.affectedRows + " record(s) updated");
//     });
// });

// // delete table (if exists - can be taken out)
// con.connect(function (err) {
//     if (err) throw err;
//     var sql = "DROP TABLE IF EXISTS customers";

//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// // delete record
// con.connect(function (err) {
//     if (err) throw err;
//     var sql = "DELETE FROM customers WHERE address = 'Highway 37'";

//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Records deleted: " + result.affectedRows);
//     });
// });

// // sorting (order by)
// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers ORDER BY name", 
//     // add desc to sort in descending order (automatically does it in ascending)

//     function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// // selecting using a filter (where)
// con.connect(function (err) {
//     if (err) throw err;

//     // con.query("SELECT * FROM customers WHERE address = 'Lentegeur'",
//     // function (err, result) {
//     //     if (err) throw err;
//     //     console.log(result);
//     // });

//     // // wildcards
//     // con.query("SELECT * FROM customers WHERE address LIKE 'U%'",
//     // function (err, result) {
//     //     if (err) throw err;
//     //     console.log(result);
//     // });
    
//     // // escape values - when query values are provided by the user
//     // var adr = 'Upper Lotus';
//     // var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);

//     // con.query(sql, function (err, result) {
//     //     if (err) throw err;
//     //     console.log(result);
//     // }); //OR USE ?

//     var adr = 'Upper Lotus';
//     var sql = 'SELECT * FROM customers WHERE address = ?'

//     con.query(sql, [adr], function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// // selecting from a table - specific columns
// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//         if (err) throw err;
//         // show all results:
//         console.log(result);

//         // // show specific result:
//         // console.log(result[2].address);

//         // // show fields object: - info about each field as an object
//         // console.log(fields);

//         // // specificy field:
//         // console.log(fields[1].name);
//     });
// });

// // selecting from a table - all columns
// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// // insert multiple records into a table
// con.connect(function (err) {
//     if (err) throw err;
//     console.log('Connection established!');

//     var sql = 'INSERT INTO customers (name, address) VALUES ?';
//     var values = [
//         ['Llewellyn', 'Highway 65'],
//         ['Ethan', 'Woodstock'],
//         ['Clayton', 'Lentegeur'],
//         ['Timothy', 'Lansdowne'],
//         ['Caryn', 'Pelican Heights'],
//         ['Jadee', 'Eerste Rivier'],
//         ['Lukie', 'Under the Sea']
//     ];

//     con.query(sql, [values], function (err, result) {
//         if (err) throw err;
//         console.log('Records inserted: ' + result.affectedRows);
//     });
// });

// // insert single record into a table (with value of the insert ID)
// con.connect(function (err) {
//     if (err) throw err;
//     console.log('Connection established!');

//     var sql = "INSERT INTO customers (name, address) VALUES ('Tharwah', 'Upper Lotus')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted! ID: " + result.insertId);
//     });
// });

// // what the result object looks like for interests sake:
// // {
// //     fieldCount: 0,
// //     affectedRows: 14,
// //     insertId: 0,
// //     serverStatus: 2,
// //     warningCount: 0,
// //     message: '\'Records:14  Duplicated: 0  Warnings: 0',
// //     protocol41: true,
// //     changedRows: 0
// //   }

// // create a table
// con.connect(function(err) {
//     if (err) throw err;
//     console.log('Connection established!');

//     var sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))';

//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created!");
//     });
// });

// // create a database
// con.connect((err) => {
//     if (err) throw err;
//     console.log('Connection established!');

//     con.query("CREATE DATABASE mydb", function (err, result) {
//         if (err) throw err;
//         console.log('Database created: ' + result);
//     });
// });