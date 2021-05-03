
//this app is more for authentication checks than real cookies and stuff like that
//learning from https://hackernoon.com/enforcing-a-single-web-socket-connection-per-user-with-node-js-socket-io-and-redis-65f9eb57f66a
const http = require('http');
var path = require('path');
const socketIO = require('socket.io');
var express = require('express'); //express is an application

var app = express();
const PORT = process.env.PORT || 9000;
var server = http.Server(app);
var io = socketIO(server);

app.use(express.static('public')); //set the folder where our javascript for clientside is located

io.attach(server);


io.on('connection', (socket) => {
  console.log(`Socket ${socket.id} connected.`);

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected.`);
  });
});

server.listen(PORT, function() {
    msg = 'Starting the server on port '+PORT;
    console.log(msg );
});