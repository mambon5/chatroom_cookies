const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

const keys = [];

const player = {
    x: 0,
    y: 0,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    frameW: 32,
    frameH: 48,
    speed: 4,
    moving: false,
    hi: function() {return player.x++;}
};

const persimg = new Image();
persimg.src = "images/henryjones.png";

const background = new Image();
background.src = "images/firstroom.png";


setInterval(
function animate()
{
    ctx.clearRect(0,0,canvas.width,canvas.height); 
    ctx.drawImage(background,0,0,canvas.width,canvas.height);    
    

    
    ctx.drawImage(persimg, player.frameX*player.frameW, player.frameY*player.frameH, player.width,player.height,player.x,player.y,player.frameW,player.frameH);

    movePlayer();
    camina();
    
    
    requestAnimationFrame(animate);
    
}
)

animate();

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
    player.moving = true;
});
window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    player.moving = false;
});

/*
 * 
    37(left arrow)
    38(up arrow)
    39(right arrow)
    40(down arrow) 
 * 
 * */
 

function movePlayer(){
    if(keys[38]){
        
        player.frameY = 3;
        player.y -= player.speed;

    }
    if(keys[40]){
        
        player.frameY = 0;
        player.y += player.speed;

    }
    if(keys[37]){
        
        player.frameY = 1;
        player.x -= player.speed;
    }
    if(keys[39]){
       
        player.frameY = 2;
        player.x += player.speed;
    }
}

function camina() {
   
        if(player.frameX < 3 && player.moving) player.frameX++;
        else player.frameX = 0;
   
}