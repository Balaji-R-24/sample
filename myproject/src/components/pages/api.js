var express = require('express');
var app = express();
// var sql = require("mssql");


app.get('/', function (req, res) {
    res.send("hello");
})
// app.get('/student1', function (req, res) {

//     // config for your database
//     var config = {
//         user: 'Balaji',
//         password: 'Balre@ct135',
//         server: '10.10.13.212\\sql2014',
//         database: 'Training1'
//     };

//     // connect to your database
//     sql.connect(config, function (err) {

//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();

//         // query to the database and get the records
//         request.query('select * from login', function (err, results) {

//             if (err) console.log(err)

//             // send records as a response
//             res.json({

//                 data: results

//             })
//             sql.close();
//         });

//     });

// });
//POST API
app.post("/", function (req, res) {
    console.log(req.body);
    var query = "INSERT INTO login ('usernamedb','passworddb') VALUES (req.body.username,req.body.password)";
    //  console.log(query,res)
});
