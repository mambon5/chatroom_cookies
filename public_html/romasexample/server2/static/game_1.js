


const socket = io("http://localhost:3000");
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

if(messageForm != null) {
    const name = prompt("What is your name?");
    appendMessage("You joined");
    socket.emit("new-user",name);

//    messageForm.addEventListener("submit", function(e){
//       e.preventDefault(); 
//       const message = messageInput.value
//       appendMessage(`You: ${message}` );
//       socket.emit("")
//    });
}



socket.on('chat-message', function(data) {
	//console.log(data);
        appendMessage(`${data.name}:${data.message}`);
//	var inhtm = document.getElementById('messages').innerHTML;
//	document.getElementById('messages').innerHTML =  data  + "<br>" + inhtm;
});

socket.on("user-connected", function(name) {
   appendMessage(`${name} connected`); 
    
});

socket.on("user-disconnected", function(name){
   appendMessage(`${name} disconnected`); 
});

messageForm.addEventListener('submit', function(e){
   e.preventDefault();
   const message = messageInput.value;
   appendMessage(`You: ${message}`);
   socket.emit('send-chat-message', message);
   messageInput.value = '';
});

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}

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


socket.emit('new-user', "a");

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






