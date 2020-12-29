const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

const lag = 0;
const update_rate = 10; // updates per second

app.set('port', 3000);
app.use('/static', express.static('static'));

// Routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server
server.listen(3000, () => {
    console.log('Starting server on port 3000');
});

var state = {
    players: {},
    timestamp: 0
};

// Add the WebSocket handlers
io.on('connection', (socket) => {
    socket.on('new player', () => {
        state.players[socket.id] = {
            x: 300,
            y: 300,
            last_sequence_number: 0
        };
    });
    socket.on('movement', (data) => {
        updatePlayers(socket.id, data);
    });
});
sleep = function (ms) {
    return new Promise(result => setTimeout(result, ms));
};
updatePlayers = async function (id, data) {
    await sleep(lag);
    var player = state.players[id] || {};

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
    state.timestamp = +new Date();
};
setInterval(() => {
    io.sockets.emit('state', state);
}, 1000 / update_rate);