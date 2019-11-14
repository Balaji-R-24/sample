var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.use(cors())
app.post('/student1', function (req, res) {

    var sql = require("mssql");
    // Configuration object for your database
    var config = {
        user: 'Balaji',
    password: 'Balre@ct135',
    server: '10.10.13.212\\sql2014', 
    database: 'Training1' 
    };
    // connect to the database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        console.log(req.body);
           
        // query to the database and get the records
        request.query("insert into login values ( '" + req.body.username + "','" + req.body.password + "')", function (err, result) {
            
            if (err) console.log(err)
            // send records as a response
            res.send(result);
            sql.close();
            
        });
    });
   
});

var server = app.listen(5001, function () {
    console.log(`5001 is running.`);
});