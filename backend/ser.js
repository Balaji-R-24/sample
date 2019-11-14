// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var sql = require("mssql");

// // Create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static('public'));



// app.post('/process_post', urlencodedParser, function (req, res) {

//    // Prepare output in JSON format
//     const response={
//         username:req.body.username,
//         password:req.body.password
//     }
//     console.log(response);
//     res.end(JSON.stringify(response));
//    var config = {
//         user: 'Balaji',
//         password: 'Balre@ct135',
//         server: '10.10.13.212\\sql2014', 
//         database: 'Training1' 
//     };
//     // connect to the database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);
//         // create Request object
//         var request = new sql.Request();
        
//         // query to the database and get the records
//         request.query('insert into login values(response.username,response.password)', function (err, result) {
            
//             if (err) console.log(err)
//             // send records as a response
//             res.send(result);
//             sql.close();
            
//         });
//     });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
// var configFile = require('./config');
var sql = require("mssql");
const port = process.env.PORT || 3456;



app.listen(port, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Running in ", port);
    }
});
 
app.use(bodyParser.json());
 
app.post('/', function (req, res) {
    // var config = configFile;
    var config = {
        user: 'Balaji',
        password: 'Balre@ct135',
        server: '10.10.13.212\\sql2014',
        database: 'Training1'
    };
    console.log(config);
    // console.log(req.body);
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("insert into login values ('" + req.body.username + "','" + req.body.password + "')", function (err, recordset) {
            if (err) console.log(err);
            res.send(recordset);
            sql.close();
        });
    });
    //
})
 
