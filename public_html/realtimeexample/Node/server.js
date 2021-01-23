const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const ejs = require('ejs');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

const update_rate = 10; // updates per second

const rooms = {};

app.set('port', 3000);
app.set('views', './views')
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

// Routing
app.get('/', (req, res) => {
    res.render('index', {rooms: rooms});
});

app.post('/room', (req, res) => {
    if (rooms[req.body.room] != null) {
        return res.redirect('/')
    }
    rooms[req.body.room] = {
        state: { players: {}, timestamp: 0 }
    }
    res.redirect(req.body.room)
    // Send message that new room was created
    io.emit('room-created', req.body.room)
});

app.get('/:room', (req, res) => {
    if (rooms[req.params.room] == null) {
        return res.redirect('/')
    }
    res.render('room', { roomName: req.params.room })
});

// Starts the server
server.listen(3000, () => {
    console.log('Starting server on port 3000');
});

// Add the WebSocket handlers
io.on('connection', (socket) => {
    console.log("New connection: Socket ID -> " + socket.id);
    socket.on('new player', (room) => {
        socket.join(room);
        console.log("New player in room " + room);
        rooms[room].state.players[socket.id] = {
            x: 300,
            y: 300,
            last_sequence_number: 0
        };
        socket.on('disconnect', () => {
            delete rooms[room].state.players[socket.id];
        });
    });
    socket.on('movement', (data, roomName) => {
        updatePlayers(socket.id, data, roomName);
    });
});
sleep = function (ms) {
    return new Promise(result => setTimeout(result, ms));
};
updatePlayers = function (id, data, room) {
    var player = rooms[room].state.players[id] || {};

    if (data.left) {
        player.x -= 5;
    }
    if (data.up) {
        player.y -= 5;
    }
    if (data.right) {
        player.x += 5;
    }
    if (data.down) {
        player.y += 5;
    }
    player.last_sequence_number = data.sequence_number;
    rooms[room].state.timestamp = +new Date();
};

setInterval(() => {
    Object.keys(rooms).forEach((room) => {
        io.sockets.in(room).emit('state', rooms[room].state);
    });
}, 1000 / update_rate);