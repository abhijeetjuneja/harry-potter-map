var express     = require('express');
var app         = express();
var http = require('http').Server(app);
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var responseGenerator = require('./libs/responseGenerator');
var port        = process.env.PORT || 3000;
var path = require ('path');
var cors = require('cors');
var users=[];
app.use(express.static(path.join(__dirname, '/public')));
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// log to console
app.use(morgan('dev'));

//CORS
app.use(cors({
    origin: '*',
    withCredentials: false,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin' ]
}));

//Application level middleware
app.use(function(req,res,next){
  var logs = {'Time of Request': Date.now(),
        'Requested Url'  : req.originalUrl,
        'Base Url'       : req.baseUrl,
        'Ip address'     : req.ip,
        'Method'         :req.method
  };
  console.log(logs);
  next();
});


mongoose.connect("mongodb+srv://abcd:abcd@cluster0.qmo38.mongodb.net/", {dbName: "harry-potter"});

var db = mongoose.connection;
db.on('error', console.error.bind(console, '#MongoDB - connection error'));

//Open mongoose connection
mongoose.connection.once('open', function() {

  console.log("Database Connected");

});

// fs module, by default module for file management in nodejs
var fs = require('fs');

// include all our model files
fs.readdirSync('./app/models').forEach(function(file){
  // check if the file is js or not
  if(file.indexOf('.js'))
    // if it is js then include the file from that folder into our express app using require
    require('./app/models/'+file);

});// end for each


// include controllers
fs.readdirSync('./app/controllers').forEach(function(file){
  if(file.indexOf('.js')){
    // include a file as a route variable
    var route = require('./app/controllers/'+file);
    //call controller function of each file and pass your app instance to it
    route.controllerFunction(app);

  }

});//end for each
 



// bundle our routes
var apiRoutes = express.Router();

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Error handler
app.use(function(err,req,res,next){
    
    if(res.status==404){
        var myResponse = responseGenerator.generate(true,"Page not Found",404,null);
        res.sendFile(path.join(__dirname, '/public/views/error404.html'));
    }  
});
 
 
// Start the server
http.listen(port,function(){
    console.log("Server running on port "+port);
});
