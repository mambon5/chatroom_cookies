//Dependencies

var express = require('express'); //express is an application
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('static', './static');
app.set('view engine', 'ejs');
app.use(express.static('public')); //set the folder where our javascript for clientside is located
//this allows our application to use URL encoded parameters inside of a body for a form
app.use(express.urlencoded({ extended: true})); //to accept URL parameters

//in the beggining we want 0 rooms defined
const rooms = {};

//Routing, simple route:
app.get('/', function(req, res) {
    //rends our index page, and we pass all the rooms we have
		res.render('index', {rooms:rooms});
});

//another route, for getting a room. "room" will be a parameter that gets
//passed to the url as you can see in the ":room" description below
app.get('/:room', function(req, res) {
//we wanna render another page, called room, and pass the roomname
    res.render('room', {roomName: req.params.room});
});

//Starts the server
server.listen(3001, function() {
	console.log('Starting the server on port 3001');
});

app.set('port', 3001);
app.use('/static', express.static(__dirname + '/static'));

const users = {};


io.on("connection", function(socket) {
  socket.on("new player", function(name){
      socket.broadcast.emit("user connected",name);
  })  ;
  socket.on("send chat message", function(message) {
     socket.broadcast.emit("chat message", {
         message: message,
         name: users[socket.id]
     }) ;
  });
  socket.on("disconnect", function() {
     socket.broadcast.emit("user disconnected", users[socket.id]); 
  });
    
});