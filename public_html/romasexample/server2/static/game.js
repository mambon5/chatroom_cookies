const socket = io();
var messageContainer = document.getElementById("message-container");
var roomContainer = document.getElementById("room-container");
var messageForm = document.getElementById("send-container");
var messageInput = document.getElementById("message-input");
var aux1 = document.getElementById("aux1");

//aux1.innerHTML = "hola mon";

if(messageForm !== null) { //only ask the name if we have a nameform or message 
                            //form
    const name = prompt("What is your name?");
    while(!name){
        name=prompt('Reason for deletion?');
    };
    appendMessage("You joined","me");
    socket.emit("new-user",name);

//    messageForm.addEventListener("submit", function(e){
//       e.preventDefault(); 
//       const message = messageInput.value
//       appendMessage(`You: ${message}` );
//       socket.emit("")
//    });
} else {
    console.log("messageForm is null!");
}

socket.on("room-created", function(room) {
//    <div> <%= room %></div>
     //      <a href="/<%= room %>">Join</a>
     aux1.innerHTML = "new room:" + room;
    const roomElement = document.createElement("div");
    roomElement.innerText = room;
    const roomLink = document.createElement("a");
    roomLink.href = `/${room}`;
    roomLink.innerText = "Join";
    roomContainer.append(roomElement);
    roomContainer.append(roomLink);
});

socket.on('chat-message', function(data) {
	//console.log(data);
        appendMessage(`${data.name}: ${data.message}`,"them");
//	var inhtm = document.getElementById('messages').innerHTML;
//	document.getElementById('messages').innerHTML =  data  + "<br>" + inhtm;
});

socket.on("user-connected", function(name) {
   appendMessage(`${name} connected`); 
    
});

socket.on("user-disconnected", function(name){
   appendMessage(`${name} disconnected`); 
});

function appendMessage(message, who="them") {
    const messageElement = document.createElement('div');
    if(who==="me") {
        messageElement.style.backgroundColor = "pink";
    } else {
        messageElement.style.backgroundColor = "LightGray";
    }
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}

messageForm.addEventListener('submit', function(e){
   e.preventDefault();
   const message = messageInput.value;
   appendMessage(`You: ${message}`, who="me");
   socket.emit('send-chat-message', message);
   messageInput.value = '';
});



var movement = {
	up: false,
	down: false,
	left: false,
	right: false
}

document.addEventListener('keydown', function(event) {
	switch(event.keyCode) {
		case 65: // A
		movement.left = true;
		socket.emit('action','<-');
		break;
		case 87: //W
		movement.up = true;
		socket.emit('action','^');
		break;
		case 68: // D
		movement.right = true;
		socket.emit('action','->');
		break;
		case 83: // S
		movement.down = true;
		socket.emit('action','v');
		break;		
	}
});

document.addEventListener("click", function() {
	socket.emit('action','click');
});

document.addEventListener('keyup', function(event) {
	switch(event.keyCode) {
		case 65: //A
			movement.left = false;
			break;
		case 87: //W 
			movement.up = false;
			break;
		case 68: //D 
			movement.right = false;
			break;
		case 83: //S 
			movement.down = false;
			break;		
	}	
});




setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);

var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;

var context = canvas.getContext('2d');
socket.on('state', function(players) {
	context.clearRect(0,0, 800, 600);
	context.fillStyle  = 'green';
	for (var id in players) {
		var player = players[id];
		context.beginPath();
		context.arc(player.x, player.y, 10, 0, 2*Math.PI);
		context.fill();
	}
	
});






