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

socket.on('user-connected', user => {
  appendMessage(`${user.name} connected, x: ${user.x}, y: ${user.y}`);
  // crear un player2
})

socket.on('user-disconnected', user => {
  appendMessage(`${user.name} disconnected`);
  //delete player if we have to.
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}
       
window.addEventListener("keyup", function(e){
    if(e.keyCode==9) {
        messageInput.focus();
    }
    console.log(e.keyCode);
});