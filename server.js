'use strict'
process.env.NODE_ENV = "production";
var express = require('express');
var app = express();
var compression = require('compression');
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
  destination:__dirname+"/uploads/",
  filename: (req, file, cb)=> {
    console.log(req.body.name);
    cb(null, req.body.name+".png");
  }
});
var upload = multer({storage:storage});
var mysql      = require('mysql');
var pool      =    mysql.createPool({
    connectionLimit : 100, //importanta
    host     : 'localhost',
    user     : 'root',
    password : 'negroni',
    database : 'db_sprit',
    debug    :  false
});
var dist = __dirname+"/dist/";
app.use(compression());
app.use(express.static(dist));
app.use('/images', express.static(__dirname + '/uploads'));

app.get('/', function (req, res) {
  console.log("Sending index");
  res.sendFile(path.join(dist,'index.html'));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
                var resArray = new Array();
                for(let item of rows){
                  console.log(item.Name)
                  resArray.push(item.Name);
                }
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
  let measure = req.body;
  console.log("L73");
  console.log(measure.iNames);
  console.log(measure.iMeasures);
  res.sendStatus(200);
  pool.getConnection((connection,err)=>{
    connection.beginTransaction();

    connection.query('INSERT INTO Drinks VALUES()')
  });


});

//Required for html5 pushstate
app.get('*', function (req, res) {
  res.sendFile(path.join(dist,'index.html'));
  console.log("Called last request function,intended?")
});




var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
}).on('error',(err)=>{
  console.log(err);
});

function handleSqlError(conn,err){
  return conn.rollback(()=>{
    throw err;
  });
}
