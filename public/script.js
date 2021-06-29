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
});

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`);
});

socket.on("current users", charvec => {
    
    charvec.forEach(user  => {
        monst = getcharacter(user, type="monster");
        for (var i = 0; i < 4; i ++){
            monst.animations.push(new Animation(monster3AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
         }
         monst.animation = monst.animations[0];
        CcharacterManager.add(monst);        
    });
    CentityManager.fillArray();
    
    console.log("here come the current users connected");
    
    
    console.log(charvec);
    console.log(charvec.length);
});

//var players = []
//use socket.id instead of username
socket.on('user-connected', (player, user) => {
  // crear un player2
    
    //adding a new player to the client
    chari = JSON.parse(JSON.stringify(player));
    
    newpl = new Cmonster(x = chari._x, y = chari._y, width = chari._width,
    height = chari._height,
    scale = chari._scale,
    chari._speed,
    margins = chari._margins,
    name = chari._name,
    clase = chari._clase)
    
    //getcharacter(player, type="monster");
    
    
    
    
//    newpl = new Cmonster(plyr._x,plyr._y, 32*scale, 
//    48*scale, plyr._scale,
//    plyr._speed, plyr._margins, plyr._name, plyr._clase);
    
    for (var i = 0; i < 4; i ++){
    newpl.animations.push(new Animation(monster3AnimationSheet, i, [walkdt, walkdt, walkdt, walkdt]));
    }
    newpl.animation = newpl.animations[0];
    
    CcharacterManager.add(newpl);
    console.log(newpl.x+" "+newpl.y+" "+ newpl.width+" "+ newpl.height+" "+ 
    newpl.scale+" "+ newpl.speed+" "+ newpl.margins+" "+ newpl.name+" "+ newpl.clase);
    CentityManager.fillArray();
    

appendMessage(`${newpl.name} connected, x: ${Math.round(newpl.x)}, y: ${Math.round(newpl.y)}`);
})

//setInterval(function() {
//    if(typeof player != 'undefined') socket.emit('movement', player, roomName );
//}, 1000 / 1);

socket.on('current states', function(users) {
    console.log("amount of players : " + users.length)
  users.forEach(user  => {
      var name = user._name
      var x = user._x
      var y = user._y
  })
});


socket.on('user-disconnected', user => {
  appendMessage(`${user.name} disconnected`);
  console.log("deleting user...");
  console.log(user);
  console.log("vchar vec before delete")
  console.log(vchar)
  CcharacterManager.delete(user);
  CentityManager.fillArray();
  console.log("vchar vec after delete")
  console.log(vchar)
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

function getcharacter(chari, type="monster") {
    
    chari = JSON.parse(JSON.stringify(chari));
    //parsing JSON object as string 
    
    x = chari._x;
    y = chari._y;
    width = chari._width;
    height = chari._height;
    scale = chari._scale;
    spd = chari._speed;
    margi = chari._margins
    name = chari._name
    clase = chari._clase
    
    
    if(type == "monster") { 
        res = new Cmonster(x,y,width, height, scale, spd, margi, name, clase);
        return  res;
    } else {
        if(type=="player") {
            res = new Cplayer(x,y,width, height, scale, speed, margi, name, clase);
            return  res;
        }
    }
    return "not a player nor a monster";
}