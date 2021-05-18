//client

const socket = io();
const messageContainer = document.getElementById('message-container');
const roomContainer = document.getElementById('room-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

if (messageForm != null) {
  const name = prompt('What is your name?');
  appendMessage('You joined');
  socket.emit('new-user', roomName, name);

  messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value + `player x: ${Math.round(player.x) + 
            ", y: " +Math.round(player.y)}`;
    appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', roomName, message);
    messageInput.value = '';
    messageInput.blur();
  });
}

socket.on('room-created', room => {
  const roomElement = document.createElement('div')
  roomElement.innerText = room
  const roomLink = document.createElement('a')
  roomLink.href = `/${room}`
  roomLink.innerText = 'join'
  roomContainer.append(roomElement)
  roomContainer.append(roomLink)
})

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`);
})

var players = []
//use socket.id instead of username
socket.on('user-connected', user => {
  // crear un player2
players[user.name] = monst5 //we create ab array of players "players"
players[user.name].generateValidPos();
CcharacterManager.add(players[user.name]);
CentityManager.fillArray();

user.x = players[user.name].x;
user.y = players[user.name].y;
appendMessage(`${user.name} connected, x: ${Math.round(user.x)}, y: ${Math.round(user.y)}`);
})

setInterval(function() {
    if(typeof player != 'undefined') socket.emit('movement', player, roomName );
}, 1000 / 60);

socket.on('state', function(users) {
  users.foreEach(user  => {
      players[user.name].x = user.x
      players[user.name].y = user.y
  })
});


socket.on('user-disconnected', user => {
  appendMessage(`${user.name} disconnected`);
  //delete player if we have to.
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.prepend(messageElement)
}
       
window.addEventListener("keyup", function(e){
    if(e.keyCode==9) {
        messageInput.focus();
    }
    
});