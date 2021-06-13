//client

const socket = io();
const messageContainer = document.getElementById('message-container');
const roomContainer = document.getElementById('room-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

if (messageForm != null) {
  const name = prompt('What is your name?');
  player.name = name;
  appendMessage('You joined');
  socket.emit('new-user', roomName, player);
console.log("you joined")
  messageForm.addEventListener('submit', e => {
    e.preventDefault();
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

//var players = []
//use socket.id instead of username
socket.on('user-connected', (player, user) => {
  // crear un player2
    console.log("new player detected");
    //adding a new player to the client
    plyr = JSON.parse(JSON.stringify(player));
    console.log("scale: "+scale);
    var w = parseInt(plyr._width)*scale
    newpl = new Cmonster(plyr._x,plyr._y, 32*scale, 
    48*scale, plyr._scale,
    plyr._speed, plyr._margins, plyr._name, plyr._clase);
    for (var i = 0; i < 4; i ++){
    newpl.animations.push(new Animation(monster3AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
    }
    newpl.animation = newpl.animations[0];
    
    
    CcharacterManager.add(newpl);
    console.log(newpl.x+" "+newpl.y+" "+ newpl.width+" "+ newpl.height+" "+ 
    scale+" "+ newpl.speed+" "+ newpl.margins+" "+ newpl.name+" "+ newpl.clase);
    CentityManager.fillArray();

appendMessage(`${newpl.name} connected, x: ${Math.round(newpl.x)}, y: ${Math.round(newpl.y)}`);
})

//setInterval(function() {
//    if(typeof player != 'undefined') socket.emit('movement', player, roomName );
//}, 1000 / 1);

socket.on('state', function(users) {
  users.foreEach(user  => {
//      players[user.name].x = user.x
//      players[user.name].y = user.y
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