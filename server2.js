//this app is more for authentication checks than real cookies and stuff like that
//learning from https://hackernoon.com/enforcing-a-single-web-socket-connection-per-user-with-node-js-socket-io-and-redis-65f9eb57f66a
const http = require('http');
var path = require('path');
const socketIO = require('socket.io');
var express = require('express'); //express is an application
//for encrypted authorization
const socketAuth = require('socketio-auth');
//for not allowing multiple connections under the same user we use REddis
const adapter = require('socket.io-redis');

var app = express();
const PORT = process.env.PORT || 9000;
var server = http.Server(app);
var io = socketIO(server);

//redis adapter
const redisAdapter = adapter({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASS || 'password'
});



app.use(express.static('public')); //set the folder where our javascript for clientside is located


io.attach(server);
io.adapter(redisAdapter);

// dummy user verification
async function verifyUser (token) {
  return new Promise((resolve, reject) => {
    // setTimeout to mock a cache or database call
    setTimeout(() => {
      // this information should come from your cache or database
      const users = [
        {
          id: 1,
          name: 'mariotacke',
          token: 'secret real token',
        },
      ];

      const user = users.find((user) => user.token === token);

      if (!user) {
        return reject('USER_NOT_FOUND');
      }

      return resolve(user);
    }, 200);
  });
}

socketAuth(io, {
  authenticate: async (socket, data, callback) => {
    const { token } = data;

    try {
      const user = await verifyUser(token);

      socket.user = user;

      return callback(null, true);
    } catch (e) {
      console.log(`Socket ${socket.id} unauthorized.`);
      return callback({ message: 'UNAUTHORIZED' });
    }
  },
  postAuthenticate: (socket) => {
    console.log(`Socket ${socket.id} authenticated.`);
  },
  disconnect: (socket) => {
    console.log(`Socket ${socket.id} disconnected.`);
  },
});

server.listen(PORT, function() {
    msg = 'Starting the server on port '+PORT;
    console.log(msg );
});