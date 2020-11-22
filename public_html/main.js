let aux1 =  document.getElementById('aux');
let aux2 =  document.getElementById('aux2');
let aux3 =  document.getElementById('aux3');

const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

const scale = 1.6;

const map = new Cmap(3,5);

const player = new Cplayer(canvas.width/2, canvas.height/2, 32, 48,
scale, 10, margins = marg_henry, name="hjones");
player.image.src = "images/henryjones.png"; // 24.25, 45.5
var units = [player];

const monst1 = new Cmonster(canvas.width/2, canvas.height/2, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;}, 
                32, 48, scale, 10, margins = marg_cpmerica, name="monst1");
monst1.image.src = "images/captainamerica_shield.png";
units.push(monst1);

const monst2 = new Cmonster(canvas.width/2, canvas.height/2, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;}, 
32, 32, scale, 5, margins = marg_greebo2, name="monst2");
monst2.image.src = "images/greebo2.png";
units.push(monst2);

const monst3 = new Cmonster(canvas.width/2, canvas.height/2, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;}, 
32, 48, scale, 5, margins = marg_prodroid2, name="monst3");
monst3.image.src = "images/protocoldroid2.png";
units.push(monst3);

const monst4 = new Cmonster(canvas.width/2, canvas.height/2, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 10, margins = marg_tiana2, name="monst4");
monst4.image.src = "images/tiana2.png";
units.push(monst4);

const monst5 = new Cmonster(canvas.width/2, canvas.height/2, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 13, margins = marg_rhodey, name="monst5");
monst5.image.src = "images/rhodey.png";
units.push(monst5);

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

const game = new Cgame(60);

game.startGame();

