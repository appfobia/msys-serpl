var express = require('express');
var app = express();
var path = require('path');
//var mongodb = require('mongodb');

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

var fileInOutdb =[];

/* Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname, details set in .env
var uri = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.PORT+'/'+process.env.DB;

mongodb.MongoClient.connect(uri, function(err, db) {
  if(err) throw err;
  console.log("Connecting to MongoDB "+ process.env.DB);
  
  var itemCollection = db.collection('Items');
  console.log("Creating/Opening item collection");
});
*/


var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static('public'));


function createDb(_dbPath) {  // Creates a db with path _dbPath = '/path to/db_name.csv'


}

function writeDb(_json){
  if(!!_json) {
     if(_json.hasOwnProperty('fileNum') && _json.hasOwnProperty('fileName') && _json.hasOwnProperty('receiveDate') && _json.hasOwnProperty('fileType') ) 
     fileInOutdb.push(_json);
    console.log(fileInOutdb);
    return 1;
  }
  else return -1;
}

function readDb(_dbFilePath) {


}

app.get('/', function(request, response) {
  //response.sendFile(__dirname + '/views/index.html');
  response.render('fileinoutform');
});

app.get('/fileinoutList', function(request, response) {
  //response.sendFile(__dirname + '/views/index.html');
  response.render('fileinoutList',{list: fileInOutdb});
});

app.get('/index', function(request, response) {  // Dummy
  //response.render('fileinoutform');
  response.sendFile(__dirname + '/views/index.html');
});






app.post('/fileinoutdata', function(req,res) {
  var data= JSON.stringify(req.body);
  console.log(data);
    if(writeDb(JSON.parse(data))===1)
      res.json(fileInOutdb);
    else res.json({post:"error while posting"});
});


var listener = app.listen(3000, function() {
  console.log('Your app is listening on port ' + 3000);
});
