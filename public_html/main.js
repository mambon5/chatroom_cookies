let aux1 =  document.getElementById('aux');
let aux2 =  document.getElementById('aux2');

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
    speed: 10,
    moving: false,
    hi: function() {return player.x++;}
};

const persimg = new Image();
persimg.src = "images/henryjones.png";

const background = new Image();
background.src = "images/firstroom.png";





window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
   
});
window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    
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
    player.moving = true;
    if(keys[38]){
        
        player.frameY = 3;
        player.y -= player.speed;

    }
    else if(keys[40]){
        
        player.frameY = 0;
        player.y += player.speed;

    }
    else if(keys[37]){
        
        player.frameY = 1;
        player.x -= player.speed;
    }
    else if(keys[39]){
       
        player.frameY = 2;
        player.x += player.speed;
    }
    else player.moving = false;
}

function camina() {
   
        if(player.frameX < 3 && player.moving) player.frameX++;
        else player.frameX = 0;
    
   
}

let fpsint, now, then, elapsed;

let iter = 0;

function animate()
{
    now = Date.now();
    elapsed = now - then;
    aux2.innerHTML = "pos x: " + player.x + " <br>pos y: " + player.y;
    aux1.innerHTML = "now: " + now + "<br> then: " + then;
    if(elapsed > fpsint) {
        
        then = now;
    ctx.clearRect(0,0,canvas.width,canvas.height); 
    ctx.drawImage(background,0,0,canvas.width,canvas.height);    
    

    
    ctx.drawImage(persimg, player.frameX*player.frameW, player.frameY*player.frameH, player.width,player.height,player.x,player.y,player.frameW,player.frameH);
    
    camina();
    movePlayer();
    
    }
    ++iter;
    
    requestAnimationFrame(animate);
    
    
}



function startAnime(interval) {
    fpsint = interval;
    then = Date.now();
    aux1.innerHTML = "now: " + now + ", then: " + then;
    animate();
}

startAnime(60);