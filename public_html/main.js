let aux1 =  document.getElementById('aux');
let aux2 =  document.getElementById('aux2');
let aux3 =  document.getElementById('aux3');

const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

const scale = 1.6;
const speed = 10;
const adt = 3;

const map = new Cmap(3,5);

const playerAnimationSheet   = new AnimationSheet("images/henryjones.png", 128, 192, 4, 4);
const monster1AnimationSheet = new AnimationSheet("images/captainamerica_shield.png", 128, 192, 4, 4);
const monster2AnimationSheet = new AnimationSheet("images/greebo2.png", 128, 128, 4, 4);
const monster3AnimationSheet = new AnimationSheet("images/protocoldroid2.png", 128, 192, 4, 4);
const monster4AnimationSheet = new AnimationSheet("images/tiana2.png", 128, 192, 4, 4);
const monster5AnimationSheet = new AnimationSheet("images/rhodey.png", 128, 192, 4, 4);
const monster6AnimationSheet = new AnimationSheet("images/laila.png", 128, 192, 4, 4);
const monster7AnimationSheet = new AnimationSheet("images/officewoman5.png", 128, 192, 4, 4);
const barril1AnimationSheet = new AnimationSheet("images/barril1.png", 115, 130, 1, 1);
const barril2AnimationSheet = new AnimationSheet("images/barril2.png", 164, 178, 1, 1);
const lollypalAnimationSheet = new AnimationSheet("images/lollypoppal.png", 100, 237, 1, 1);
const candybowlAnimationSheet = new AnimationSheet("images/candybowl1.png", 62, 93, 1, 1);
const bubble1AnimationSheet = new AnimationSheet("images/bubble1.png", 54, 16, 1, 3);



const player = new Cplayer(canvas.width/2, canvas.height/2, 32, 48, scale, speed, marg_henry, name="hjones");
//player.image.src = "images/asdf.png"; // 24.25, 45.5
player.generateValidPos();

console.log("Player: " + player.x + " | " + player.y);
for (var i = 0; i < 4; i ++){
  player.animations.push(new Animation(playerAnimationSheet, i, [adt, adt, adt, adt]));
}
player.animation = player.animations[0];
CcharacterManager.add(player);

const monst1 = new Cmonster(canvas.width/10*0, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
                32, 48, scale, speed, marg_cpmerica, name="monst1");
//monst1.image.src = "images/captainamerica_shield.png";
for (var i = 0; i < 4; i ++){
  monst1.animations.push(new Animation(monster1AnimationSheet, i, [adt, adt, adt, adt]));
}
monst1.animation = monst1.animations[0];
monst1.generateValidPos();
CcharacterManager.add(monst1);

const monst2 = new Cmonster(canvas.width/10*1, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 32, scale, speed/2, marg_greebo2, name="monst2");
//monst2.image.src = "images/greebo2.png";
for (var i = 0; i < 4; i ++){
  monst2.animations.push(new Animation(monster2AnimationSheet, i, [adt, adt, adt, adt]));
}
monst2.animation = monst2.animations[0];
monst2.generateValidPos();
CcharacterManager.add(monst2);

const monst3 = new Cmonster(canvas.width/10*2, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, speed/2, marg_prodroid2, name="monst3");
//monst3.image.src = "images/protocoldroid2.png";
for (var i = 0; i < 4; i ++){
  monst3.animations.push(new Animation(monster3AnimationSheet, i, [adt, adt, adt, adt]));
}
monst3.animation = monst3.animations[0];
monst3.generateValidPos();
CcharacterManager.add(monst3);

const monst4 = new Cmonster(canvas.width/10*3, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, speed*1.1, marg_tiana2, name="monst4");
//monst4.image.src = "images/tiana2.png";
for (var i = 0; i < 4; i ++){
  monst4.animations.push(new Animation(monster4AnimationSheet, i, [adt, adt, adt, adt]));
}
monst4.animation = monst4.animations[0];
monst4.generateValidPos();
CcharacterManager.add(monst4);

const monst5 = new Cmonster(canvas.width/10*4, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, speed*1.5, marg_rhodey, name="monst5");
//monst5.image.src = "images/rhodey.png";
for (var i = 0; i < 4; i ++){
  monst5.animations.push(new Animation(monster5AnimationSheet, i, [adt, adt, adt, adt]));
}
monst5.animation = monst5.animations[0];
monst5.generateValidPos();
CcharacterManager.add(monst5);

const monst6 = new Cmonster(canvas.width/10*6, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, speed*1.1, marg_laila, name="monst6");
for (var i = 0; i < 4; i ++){
  monst6.animations.push(new Animation(monster6AnimationSheet, i, [adt, adt, adt, adt]));
}
monst6.animation = monst6.animations[0];
monst6.generateValidPos();
CcharacterManager.add(monst6);

const monst7 = new Cmonster(canvas.width/10*6, canvas.height/3, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, speed*1, marg_laila, name="monst7");
for (var i = 0; i < 4; i ++){
  monst7.animations.push(new Animation(monster7AnimationSheet, i, [adt, adt, adt, adt]));
}
monst7.animation = monst7.animations[0];
monst7.generateValidPos();
CcharacterManager.add(monst7);


const barril1 = new Cobject(canvas.width/10*7, canvas.height/3,function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;}, 32, 37, scale, 0, 
marg_barril1,  name= "barril1");
barril1.animations.push(new Animation(barril1AnimationSheet, 0, 1));
barril1.animation = barril1.animations[0];
CobjectManager.add(barril1);

const barril2 = new Cobject(canvas.width / 10 * 6, canvas.height * 2 / 3, function () { return this.x - player.x + player.x_init; }, function () { return this.y - player.y + player.y_init; }, 32, 37, scale, 0, 
marg_barril1,  name= "barril1");
barril2.animations.push(new Animation(barril1AnimationSheet, 0, 1));
barril2.animation = barril2.animations[0];
//init_pos = barril2.generateValidPos();
//barril2.x = init_pos[0];
//barril2.y = init_pos[1];
console.log("Barril 2: " + barril2.x + " | " + barril2.y);
CobjectManager.add(barril2);

 //genera i barrils aleatoriament de candy:
for(let i=0; i<10; ++i) {
    barril3 = new Cobject(canvas.width / 10 * 6, canvas.height * 3 / 3, function () { return this.x - player.x + player.x_init; }, function () { return this.y - player.y + player.y_init; }, 32, 37, scale, 0, 
    marg_barril1,  name= ("barrillcandy"+i));
    barril3.animations.push(new Animation(barril1AnimationSheet, 0, 1));
    barril3.animation = barril3.animations[0];
    //init_pos = barril3.generateValidPos();
    //barril3.x = init_pos[0];
    //barril3.y = init_pos[1];
    CobjectManager.add(barril3);
}

 //genera i barrils aleatoriament de vi:
for(let i=0; i<10; ++i) {
    barril3 = new Cobject(canvas.width / 10 * 6, canvas.height * 3 / 3, function () { return this.x - player.x + player.x_init; }, function () { return this.y - player.y + player.y_init; }, 32, 37, scale, 0, 
    marg_barril1,  name= ("barrilwine"+i));
    barril3.animations.push(new Animation(barril2AnimationSheet, 0, 1));
    barril3.animation = barril3.animations[0];
    //init_pos = barril3.generateValidPos();
    //barril3.x = init_pos[0];
    //barril3.y = init_pos[1];
    CobjectManager.add(barril3);
}
//palo de piruletas:
for(let i=0; i<10; ++i) {
    lollypal = new Cobject(canvas.width/10*6, canvas.height*3/3,function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;}, 
        20, 47, scale, 0, 
    marg_lollypal,  name= ("lollypopbar"+i));
    lollypal.animations.push(new Animation(lollypalAnimationSheet, 0, 1));
    lollypal.animation = lollypal.animations[0];
    //init_pos = lollypal.generateValidPos();
//    lollypal.x = init_pos[0];
//    lollypal.y = init_pos[1];
    CobjectManager.add(lollypal);
}

//bol de chuches
for(let i=0; i<10; ++i) {
    candybowl = new Cobject(canvas.width/10*6, canvas.height*3/3,function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;}, 
        15, 20, scale, 0, 
    marg_candybowl,  name= ("candybowl"+i));
    candybowl.animations.push(new Animation(candybowlAnimationSheet, 0, 1));
    candybowl.animation = candybowl.animations[0];
    //init_pos = candybowl.generateValidPos();
//    lollypal.x = init_pos[0];
//    lollypal.y = init_pos[1];
    CobjectManager.add(candybowl);
}

const bubble1 = new Cbubble(canvas.width/10*4, canvas.height/3, function() {return this.x; },function() {return this.y; },
    18, 16, scale, 0,[2,0,2,0], "bubble1", host=monst2);

bubble1.animations.push(new Animation(bubble1AnimationSheet, 0, [5,5,5]));
bubble1.animation = bubble1.animations[0];
bubble1.animation.animating = true;
bubble1.host = player;
CobjectManager.add(bubble1);

CentityManager.fillArray();
CobjectManager.generateValidPoses();

const background = new Cbackground(function() {return player.x_init - player.x;}, function() {return player.y_init - player.y;});
//background.image.src = "images/fix, y, width, height, speed, margins = [0,0,0,0]
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
