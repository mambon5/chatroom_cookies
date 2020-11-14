let aux1 =  document.getElementById('aux');
let aux2 =  document.getElementById('aux2');

const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;



const scale = 1.3;


const player = new Cplayer(canvas.width/2,canvas.height/2,32,48,scale,10);
player.image.src = "images/henryjones.png";

const monst1 = new Cmonster(function() {return this.x_init - player.x-30;}, function() {return this.y_init - player.y+30;}, canvas.width,canvas.height,32,48,scale,10);
monst1.image.src = "images/captainamerica_shield.png";

const background = new Cbackground(function() {return player.x_init - player.x;}, function() {return player.y_init - player.y;});
background.image.src = "images/firstroom.png";

const keys = [];
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
    if( (keys[38] || keys[87])  ){
        player.frameY = 3;
        apuramove(player, 1, canvas.width, canvas.height);
    }
    if( (keys[40] || keys[83])   ){
        player.frameY = 0;
        apuramove(player, 3, canvas.width, canvas.height);
    }
    if( (keys[37] || keys[65]) ){
        player.frameY = 1;
        apuramove(player, 4, canvas.width, canvas.height);
    }
    if( (keys[39] || keys[68]) ){
        player.frameY = 2;
        apuramove(player, 2, canvas.width, canvas.height);
    }
    if(player.frameX < 3 && player.moving) {
        player.frameX++;
    }
    else {
        player.frameX = 0;
    }
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
        ctx.drawImage(background.image, background.x(), background.y(), canvas.width, canvas.height);
        drawmatrix(canvas.width, canvas.height);
//        ctx.fillStyle = "red";
//        ctx.fillRect(player.x_init, player.y_init, player.width, player.height);
//        ctx.fillStyle = "black";
        drawobject(ctx, player);
        //drawobject(ctx, monst1);
        //ctx.drawImage(player.image, player.frameX*player.frameW, player.frameY*player.frameH, player.frameW, player.frameH, player.x_init, player.y_init, player.width, player.height);
        ctx.drawImage(monst1.image, monst1.frameX*monst1.frameW, monst1.frameY*monst1.frameH, monst1.frameW, monst1.frameH, monst1.x(), monst1.y(), monst1.width, monst1.height);

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

