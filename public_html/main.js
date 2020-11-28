let aux1 =  document.getElementById('aux');
let aux2 =  document.getElementById('aux2');
let aux3 =  document.getElementById('aux3');

const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

const scale = 1.6;
const speed = 6;

const map = new Cmap(3,5);

const playerAnimationSheet = new AnimationSheet("images/henryjones.png", 128, 192, 4, 4);
const monster1AnimationSheet = new AnimationSheet("images/captainamerica_shield.png", 128, 192, 4, 4);
const monster2AnimationSheet = new AnimationSheet("images/greebo2.png", 128, 128, 4, 4);
const monster3AnimationSheet = new AnimationSheet("images/protocoldroid2.png", 128, 192, 4, 4);
const monster4AnimationSheet = new AnimationSheet("images/tiana2.png", 128, 192, 4, 4);
const monster5AnimationSheet = new AnimationSheet("images/rhodey.png", 128, 192, 4, 4);
const monster6AnimationSheet = new AnimationSheet("images/laila.png", 128, 192, 4, 4);

const player = new Cplayer(canvas.width/2, canvas.height/2, 32, 48, scale, speed, margins = marg_henry, name="hjones");
player.image.src = "images/henryjones.png"; // 24.25, 45.5
let init_pos = map.generateValidPos(player.width, player.height);
player.x = init_pos[0];
player.y = init_pos[1];
for (var i = 0; i < 4; i ++){
  player.animations.push(new Animation(playerAnimationSheet, i, [5, 5, 5, 5]));
}
player.animation = player.animations[0];
CcharacterManager.add(player);

const monst1 = new Cmonster(canvas.width/10*0, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
                32, 48, scale, 7, margins = marg_cpmerica, name="monst1");
monst1.image.src = "images/captainamerica_shield.png";
for (var i = 0; i < 4; i ++){
  monst1.animations.push(new Animation(monster1AnimationSheet, i, [5, 5, 5, 5]));
}
monst1.animation = monst1.animations[0];
CcharacterManager.add(monst1);

const monst2 = new Cmonster(canvas.width/10*1, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 32, scale, 3, margins = marg_greebo2, name="monst2");
monst2.image.src = "images/greebo2.png";
for (var i = 0; i < 4; i ++){
  monst2.animations.push(new Animation(monster2AnimationSheet, i, [5, 5, 5, 5]));
}
monst2.animation = monst2.animations[0];
CcharacterManager.add(monst2);

const monst3 = new Cmonster(canvas.width/10*2, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 3, margins = marg_prodroid2, name="monst3");
monst3.image.src = "images/protocoldroid2.png";
for (var i = 0; i < 4; i ++){
  monst3.animations.push(new Animation(monster3AnimationSheet, i, [5, 5, 5, 5]));
}
monst3.animation = monst3.animations[0];
CcharacterManager.add(monst3);

const monst4 = new Cmonster(canvas.width/10*3, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 7, margins = marg_tiana2, name="monst4");
monst4.image.src = "images/tiana2.png";
for (var i = 0; i < 4; i ++){
  monst4.animations.push(new Animation(monster4AnimationSheet, i, [5, 5, 5, 5]));
}
monst4.animation = monst4.animations[0];
CcharacterManager.add(monst4);

const monst5 = new Cmonster(canvas.width/10*4, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 7, margins = marg_rhodey, name="monst5");
monst5.image.src = "images/rhodey.png";
for (var i = 0; i < 4; i ++){
  monst5.animations.push(new Animation(monster5AnimationSheet, i, [5, 5, 5, 5]));
}
monst5.animation = monst5.animations[0];
CcharacterManager.add(monst5);

const monst6 = new Cmonster(canvas.width/10*6, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 7, margins = marg_laila, name="monst6");
monst6.image.src = "images/laila.png";
for (var i = 0; i < 4; i ++){
  monst6.animations.push(new Animation(monster6AnimationSheet, i, [5, 5, 5, 5]));
}
monst6.animation = monst6.animations[0];
CcharacterManager.add(monst6);

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
