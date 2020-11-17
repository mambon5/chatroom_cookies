let aux1 =  document.getElementById('aux');
let aux2 =  document.getElementById('aux2');
let aux3 =  document.getElementById('aux3');

const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

const scale = 1.2;

const map = new Cmap();

const player = new Cplayer(canvas.width/2, canvas.height/2, 32, 48,
scale, 10, margins = marg_henry);
player.image.src = "images/henryjones.png"; // 24.25, 45.5

const monst1 = new Cmonster(  350,  60, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;}, 
                32, 48, scale, 10, margins = marg_cpmerica);
monst1.image.src = "images/captainamerica_shield.png";

const monst2 = new Cmonster(  350,  360, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;}, 
32, 32, scale, 5, margins = marg_greebo2);
monst2.image.src = "images/greebo2.png";

const monst3 = new Cmonster(  10,  100, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;}, 
32, 48, scale, 5, margins = marg_prodroid2);
monst3.image.src = "images/protocoldroid2.png";

const monst4 = new Cmonster(  400,  100, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 10, margins = marg_tiana2);
monst4.image.src = "images/tiana2.png";

const monst5 = new Cmonster(  400,  100, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 13, margins = marg_rhodey);
monst5.image.src = "images/rhodey.png";

const background = new Cbackground(function() {return player.x_init - player.x;}, function() {return player.y_init - player.y;});
//background.image.src = "images/firstroom.png";

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
        apuramove(player, 1);
    }
    if( (keys[40] || keys[83])   ){
        player.frameY = 0;
        apuramove(player, 3);
    }
    if( (keys[37] || keys[65]) ){
        player.frameY = 1;
        apuramove(player, 4);
    }
    if( (keys[39] || keys[68]) ){
        player.frameY = 2;
        apuramove(player, 2);
    }
    camina(player);
}

function camina(obj) {
    if(obj.frameX < 3 && obj.moving) {
        obj.frameX++;
    }
    else {
        obj.frameX = 0;
    }
}

/*let fpsint, now, then, elapsed;

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
        ctx.drawImage(monst1.image, monst1.frameX*monst1.frameW, monst1.frameY*monst1.frameH, monst1.frameW, monst1.frameH, monst1.x_cent(), monst1.y_cent(), monst1.width, monst1.height);
        monst1.randmove();
        ctx.drawImage(monst2.image, monst2.frameX*monst2.frameW, monst2.frameY*monst2.frameH, monst2.frameW, monst2.frameH, monst2.x_cent(), monst2.y_cent(), monst2.width, monst2.height);
        monst2.randmove();
        movePlayer();
    }
    requestAnimationFrame(animate);
}

function startAnime(interval) {
    fpsint = interval;
    then = Date.now();
    aux1.innerHTML = "now: " + now + ", then: " + then;
    animate();
}*/

//startAnime(80);

const game = new Cgame(100);

game.startGame();

