const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
classes = require('./hatman_modules/server_classess');
global = require('./hatman_modules/globalVars/entityVars');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use("/style",express.static(__dirname + "/style"));
app.use("/images",express.static(__dirname + "/images"));
app.use("/js",express.static(__dirname + "/js"));

app.use(express.urlencoded({ extended: true }));

//recti = new classes.Centity(10,4,3,2, 2, margins = [1,1,1,1], name="michelangelo");


//we create the main server loop and start it
game = new classes.Cgame(60);
game.startGame();

const rooms = { };

app.get('/', (req, res) => {
  res.render('index', { rooms: rooms })
})

app.post('/room', (req, res) => {
  if (rooms[req.body.room] != null) {
    return res.redirect('/')
  }
  rooms[req.body.room] = { 
      name: req.params.room,
      users: {} }
  res.redirect(req.body.room)
  // Send message that new room was created
  io.emit('room-created', req.body.room);
  
})

app.get('/:room', (req, res) => {
    //when a room is created, a Cmap and objects, or a full game should be created.
    //Cgame should start
  if (rooms[req.params.room] == null) {
    return res.redirect('/')
  }
  res.render('room', { roomName: req.params.room })
});

server.listen(5000, function () {console.log('connected');});

io.on('connection', socket => {
  socket.on('new-user', (room, name) => {
    socket.join(room);
    //fer un generateValid pos que usi tots els usuaris de lhabitació, 
    //rooms[room].users
    rooms[room].users[socket.id] = {
            name: name,
            x: 900,
            y: 700
            //last_sequence_number: 0
        };
    socket.to(room).broadcast.emit('user-connected', rooms[room].users[socket.id]);
  })
  
//  socket.on("movement", function(player, room) {
//      rooms[room].users[socket.id].x = player.x
//      rooms[room].users[socket.id].y = player.y
//      console.log("rooms length " + rooms.length);
//});


//setInterval(function() {
//    Object.entries(rooms)
//    socket.emit('movement', player, roomName );
//}, 1000 / 60);
  
  socket.on('send-chat-message', (room, message) => {
    socket.to(room).broadcast.emit('chat-message', { message: message, name: rooms[room].users[socket.id].name })
  })
  socket.on('disconnect', () => {
    getUserRooms(socket).forEach(room => {
      socket.to(room).broadcast.emit('user-disconnected', rooms[room].users[socket.id] )
      delete rooms[room].users[socket.id];
    })
  })
})

function getUserRooms(socket) {
  return Object.entries(rooms).reduce((names, [name, room]) => {
    if (room.users[socket.id] != null) names.push(name)
    return names
  }, [])
}