let aux1 =  document.getElementById('aux');
let aux2 =  document.getElementById('aux2');

const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

const keys = [];

const player = {
    x: 930/2,
    y: 462/2,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    frameW: 32,
    frameH: 48,
    speed: 7,
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

/* *
 *
    37(left arrow)
    38(up arrow)
    39(right arrow)
    40(down arrow)
    87(w)
    65(a)
    83(s)
    68(d)
 *
 * */

function movePlayer() {
    player.moving = false;
    
        
    
    if( (keys[38] || keys[87]) && (validpos(player.x, player.y - player.speed, canvas.width, canvas.height)) ){
        player.frameY = 3;
        player.y -= player.speed;
        player.moving = true;
    }
    if( (keys[40]||keys[83]) && (validpos(player.x, player.y + player.speed, canvas.width, canvas.height))  ){
        player.frameY = 0;
        player.y += player.speed;
        player.moving = true;
    }
    if( (keys[37]||keys[65]) && (validpos(player.x - player.speed , player.y , canvas.width, canvas.height)) ){
        player.frameY = 1;
        player.x -= player.speed;
        player.moving = true;
    }
    if( (keys[39]||keys[68]) && (validpos(player.x + player.speed , player.y , canvas.width, canvas.height))){
        player.frameY = 2;
        player.x += player.speed;
        player.moving = true;
    }
    
    
}

function camina() {
    if(player.frameX < 3 && player.moving) player.frameX++;
    else player.frameX = 0;
}

let fpsint, now, then, elapsed;

function animate() {
    now = Date.now();
    elapsed = now - then;
//    aux2.innerHTML = "pos x: " + player.x + " <br>pos y: " + player.y;
//    aux1.innerHTML = "now: " + now + "<br> then: " + then;
    if(elapsed > fpsint) {
        then = now;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(background,0,0,canvas.width,canvas.height);
        ctx.drawImage(persimg, player.frameX*player.frameW, player.frameY*player.frameH, player.width,player.height,player.x,player.y,player.frameW,player.frameH);
        camina();
        movePlayer();
    }
    requestAnimationFrame(animate);
}

function startAnime(interval) {
    fpsint = interval;
    then = Date.now();
    aux1.innerHTML = "now: " + now + ", then: " + then;
    
    animate();
}

startAnime(80);

