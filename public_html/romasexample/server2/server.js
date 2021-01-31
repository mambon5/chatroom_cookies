//Dependencies

var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

//Routing
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, 'index.html'));
});  

//Starts the server
server.listen(5000, function() {
	console.log('Starting the server on port 5000');
});


setInterval(function() {
	io.sockets.emit('message', 'hi oh mama mia!');
}, 1000);

var nplayers = 0;
var players = {};

// Add the WebSocket handlers
io.on('connection', function(socket) {
	nplayers += 1;
	socket.on('new player', function() {
		players[socket.id] = {
			x: 250,
			y: 250
		};
		io.sockets.emit('messages', " player " + socket.id + " joined the game");	
		io.sockets.emit('messages', " number of players: " + nplayers);	
		console.log("player " + socket.id + "joined the game");		
	});
	socket.on('movement', function(data) {
		var player = players[socket.id] || {};	
		if( data.left) {
			player.x -= 5;
		}
		if(data.up) {
			player.y -= 5;
		}
		if(data.right) {
			player.x += 5;
		}
		if(data.down) {
			player.y += 5;
		}
	});
	
	socket.on('action', function(data) {
		io.sockets.emit('messages', "player " + socket.id + " is doing "+data);	
		console.log("player " + socket.id + " is doing "+data);
	});
	
socket.on('disconnect', function(socket) { //connection es un evento por defecto, segun Fran
	nplayers -= 1;
	var msg = "a player has disconnected <br> number of players: " + nplayers;
	io.sockets.emit('messages', msg );
	
});
});

setInterval(function() {
  io.sockets.emit('state', players);
}, 1000 / 60);

