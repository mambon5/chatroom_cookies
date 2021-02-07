const socket = io();

socket.on("chat-mesage", function(data) {    
    console.log(data);
});


