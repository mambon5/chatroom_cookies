var client = {
    socket: io(),
    serverStateCount: 0,
    movement: { up: false, down: false, left: false, right: false, sequence_number: 0 },
    pending_movements: new Array(),
    serverState: { players: new Array(), timestamp: 0 },
    buffer_positions: new Array(),
    player: { name: "", x: 0, y: 0, last_sequence_number: 0 },
    start: function () {
        client.socket.on('state', (state) => {
            console.log(state);
            state.timestamp = new Date();
            client.serverState = state;
            var buffer_state = {
                players: new Array(),
                timestamp: 0
            }
            for (var i in state.players) {
                buffer_state.players[i] = {
                    x: state.players[i].x,
                    y: state.players[i].y,
                    last_sequence_number: state.players[i].last_sequence_number
                }
            }
            buffer_state.timestamp = state.timestamp;
            client.buffer_positions.push(buffer_state);
            this.serverStateCount++;
        });
        const canvas = document.getElementById('canvas');
        if (canvas != null) {
            const name = prompt('What is your name?');
            client.socket.emit('new player', name, roomName);
        }
    },
    update: function () {
        client.player.name = client.serverState.players[client.socket.id].name;
        client.player.x = client.serverState.players[client.socket.id].x;
        client.player.y = client.serverState.players[client.socket.id].y;
        client.player.last_sequence_number = client.serverState.players[client.socket.id].last_sequence_number;
        // Do reconciliation
        client.serverReconciliation();
        // Process inputs
        client.processInputs();
        //Interpolate
        client.interpolate();
    },
    draw: function () {
        var canvas = document.getElementById('canvas');
        canvas.width = 800;
        canvas.height = 600;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 800, 600);
        context.fillStyle = 'green';
        for (var id in client.serverState.players) {
            if (id != client.socket.id) {
                var player = client.serverState.players[id];
                context.beginPath();
                context.arc(player.x, player.y, 10, 0, 2 * Math.PI);
                context.fill();
                context.font = "20px Georgia";
                context.textAlign = "center"
                context.fillText(player.name, player.x, player.y - 15);
            }
        }
        context.beginPath();
        context.arc(client.player.x, client.player.y, 10, 0, 2 * Math.PI);
        context.fill();
        context.font = "20px Georgia";
        context.textAlign = "center"
        context.fillText(client.player.name, client.player.x, client.player.y - 15);
    },
    serverReconciliation: function () {
        var j = 0;
        while (j < client.pending_movements.length) {
            var movement = client.pending_movements[j];
            if (movement.sequence_number <= client.player.last_sequence_number) {
                // Already processed. Its effect is already taken into account into the world update
                // we just got, so we can drop it.
                client.pending_movements.splice(j, 1);
            } else {
                // Not processed by the server yet. Re-apply it.
                client.applyInput(movement);
                j++;
            }
        }
    },
    processInputs: function () {
        client.movement.sequence_number++;
        // Send input to server
        client.socket.emit('movement', client.movement, roomName);

        // Do client-side prediction
        client.applyInput(client.movement);

        // Save this input for later reconciliation
        client.pending_movements.push({
            up: client.movement.up,
            down: client.movement.down,
            left: client.movement.left,
            right: client.movement.right,
            sequence_number: client.movement.sequence_number
        });
    },
    applyInput: function (movement) {
        if (movement.left) {
            client.player.x -= 5;
        }
        if (movement.up) {
            client.player.y -= 5;
        }
        if (movement.right) {
            client.player.x += 5;
        }
        if (movement.down) {
            client.player.y += 5;
        }
    },
    interpolate: function () {
        // Compute render timestamp.
        var now = +new Date();
        var render_timestamp = now - (1000.0 / 10);

        for (var p in client.serverState.players) {
            var player = client.serverState.players[p];

            // No point in interpolating this client's entity.
            if (p == client.socket.id) {
                continue;
            }
            // Drop older positions.
            while (client.buffer_positions.length >= 2 && client.buffer_positions[1].timestamp <= render_timestamp) {
                client.buffer_positions.shift();
            }
            // Interpolate between the two surrounding authoritative positions.
            if (client.buffer_positions.length >= 2 && client.buffer_positions[0].timestamp <= render_timestamp && render_timestamp <= client.buffer_positions[1].timestamp) {
                var x0 = client.buffer_positions[0].players[p].x;
                var x1 = client.buffer_positions[1].players[p].x;
                var y0 = client.buffer_positions[0].players[p].y;
                var y1 = client.buffer_positions[1].players[p].y;
                var t0 = client.buffer_positions[0].timestamp;
                var t1 = client.buffer_positions[1].timestamp;

                player.x = x0 + (x1 - x0) * (render_timestamp - t0) / (t1 - t0);
                player.y = y0 + (y1 - y0) * (render_timestamp - t0) / (t1 - t0);
                console.log(this.serverStateCount + " | " + x0 + " | " + player.x + " | " + x1);
            }
        }
    }
};

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 65:
            client.movement.left = true;
            break;
        case 87:
            client.movement.up = true;
            break;
        case 68:
            client.movement.right = true;
            break;
        case 83:
            client.movement.down = true;
            break;
    }
});
document.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 65:
            client.movement.left = false;
            break;
        case 87:
            client.movement.up = false;
            break;
        case 68:
            client.movement.right = false;
            break;
        case 83:
            client.movement.down = false
    }
});