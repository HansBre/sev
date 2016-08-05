'use strict'

var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
var upload = multer({dest:'uploads/',
rename: function (fieldname, filename) {
    return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  }});
var mysql      = require('mysql');
var pool      =    mysql.createPool({
    connectionLimit : 100, //importanta
    host     : 'localhost',
    user     : 'root',
    password : 'negroni',
    database : 'db_sprit',
    debug    :  false
});

app.use(express.static(__dirname));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'index.html'));
});
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

var ingredients  = ['Gin','Genever','Grog'];

app.get('/ingredients/:query', (request, response) => {
  var like = request.params.query;
  console.log(like);
  pool.getConnection((err,connection)=>{
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          response.sendStatus(100);
          return;
        }
        console.log('connected as id ' + connection.threadId);
        connection.query("select * from Ingredients where Name like'"+like+"%'",function(err,rows){
            connection.release();
            if(!err) {
                console.log(rows);
                var resArray = [rows[0].Name];
                response.json(resArray);

            }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
  });
});

app.post('/addDrink/', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.body.ingredients);
  console.log(req.file.filename);
})

/**app.post('/addDrink/', (request, response) => {
  if(request.body){
    console.log(request.body.ingredients);
    response.sendStatus(200);
    return;
  }else{
    console.log("Error");
  }
  //Respond with not found status code
  response.sendStatus(404);
});*/




var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
}).on('error',(err)=>{
  console.log(err);
});
