let aux1 =  document.getElementById('aux');
let aux2 =  document.getElementById('aux2');
let aux3 =  document.getElementById('aux3');

const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

const scale = 1.6;

const map = new Cmap(3,5);

const playerAnimationSheet = new AnimationSheet("images/henryjones.png", 128, 192, 4, 4);

const playerMoveDownAnimation = new Animation(playerAnimationSheet, 0, [5, 5, 5, 5]);
const playerMoveLeftAnimation = new Animation(playerAnimationSheet, 1, [5, 5, 5, 5]);
const playerMoveRightAnimation = new Animation(playerAnimationSheet, 2, [5, 5, 5, 5]);
const playerMoveUpAnimation = new Animation(playerAnimationSheet, 3, [5, 5, 5, 5]);


const player = new Cplayer(canvas.width/2, canvas.height/2, 32, 48, scale, 10, margins = marg_henry, name="hjones");
player.image.src = "images/henryjones.png"; // 24.25, 45.5
player.animations.push(playerMoveDownAnimation);
player.animations.push(playerMoveLeftAnimation);
player.animations.push(playerMoveRightAnimation);
player.animations.push(playerMoveUpAnimation);
player.animation = player.animations[0];

var units = [player];

const monster1AnimationSheet = new AnimationSheet("images/captainamerica_shield.png", 128, 192, 4, 4);

const monster1MoveDownAnimation = new Animation(monster1AnimationSheet, 0, [5, 5, 5, 5]);
const monster1MoveLeftAnimation = new Animation(monster1AnimationSheet, 1, [5, 5, 5, 5]);
const monster1MoveRightAnimation = new Animation(monster1AnimationSheet, 2, [5, 5, 5, 5]);
const monster1MoveUpAnimation = new Animation(monster1AnimationSheet, 3, [5, 5, 5, 5]);

const monst1 = new Cmonster(canvas.width/2, canvas.height/2, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
                32, 48, scale, 10, margins = marg_cpmerica, name="monst1");
monst1.image.src = "images/captainamerica_shield.png";
monst1.animations.push(monster1MoveDownAnimation);
monst1.animations.push(monster1MoveLeftAnimation);
monst1.animations.push(monster1MoveRightAnimation);
monst1.animations.push(monster1MoveUpAnimation);
monst1.animation = monst1.animations[0];
units.push(monst1);

const monster2AnimationSheet = new AnimationSheet("images/greebo2.png", 128, 128, 4, 4);

const monster2MoveDownAnimation = new Animation(monster2AnimationSheet, 0, [5, 5, 5, 5]);
const monster2MoveLeftAnimation = new Animation(monster2AnimationSheet, 1, [5, 5, 5, 5]);
const monster2MoveRightAnimation = new Animation(monster2AnimationSheet, 2, [5, 5, 5, 5]);
const monster2MoveUpAnimation = new Animation(monster2AnimationSheet, 3, [5, 5, 5, 5]);

const monst2 = new Cmonster(canvas.width/2, canvas.height/2, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 32, scale, 5, margins = marg_greebo2, name="monst2");
monst2.image.src = "images/greebo2.png";
monst2.animations.push(monster2MoveDownAnimation);
monst2.animations.push(monster2MoveLeftAnimation);
monst2.animations.push(monster2MoveRightAnimation);
monst2.animations.push(monster2MoveUpAnimation);
monst2.animation = monst2.animations[0];
units.push(monst2);

const monster3AnimationSheet = new AnimationSheet("images/protocoldroid2.png", 128, 192, 4, 4);

const monster3MoveDownAnimation = new Animation(monster3AnimationSheet, 0, [5, 5, 5, 5]);
const monster3MoveLeftAnimation = new Animation(monster3AnimationSheet, 1, [5, 5, 5, 5]);
const monster3MoveRightAnimation = new Animation(monster3AnimationSheet, 2, [5, 5, 5, 5]);
const monster3MoveUpAnimation = new Animation(monster3AnimationSheet, 3, [5, 5, 5, 5]);

const monst3 = new Cmonster(canvas.width/2, canvas.height/2, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 5, margins = marg_prodroid2, name="monst3");
monst3.image.src = "images/protocoldroid2.png";
monst3.animations.push(monster3MoveDownAnimation);
monst3.animations.push(monster3MoveLeftAnimation);
monst3.animations.push(monster3MoveRightAnimation);
monst3.animations.push(monster3MoveUpAnimation);
monst3.animation = monst3.animations[0];
units.push(monst3);

const monster4AnimationSheet = new AnimationSheet("images/tiana2.png", 128, 192, 4, 4);

const monster4MoveDownAnimation = new Animation(monster4AnimationSheet, 0, [5, 5, 5, 5]);
const monster4MoveLeftAnimation = new Animation(monster4AnimationSheet, 1, [5, 5, 5, 5]);
const monster4MoveRightAnimation = new Animation(monster4AnimationSheet, 2, [5, 5, 5, 5]);
const monster4MoveUpAnimation = new Animation(monster4AnimationSheet, 3, [5, 5, 5, 5]);

const monst4 = new Cmonster(canvas.width/2, canvas.height/2, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 10, margins = marg_tiana2, name="monst4");
monst4.image.src = "images/tiana2.png";
monst4.animations.push(monster4MoveDownAnimation);
monst4.animations.push(monster4MoveLeftAnimation);
monst4.animations.push(monster4MoveRightAnimation);
monst4.animations.push(monster4MoveUpAnimation);
monst4.animation = monst4.animations[0];
units.push(monst4);

const monster5AnimationSheet = new AnimationSheet("images/rhodey.png", 128, 192, 4, 4);

const monster5MoveDownAnimation = new Animation(monster5AnimationSheet, 0, [5, 5, 5, 5]);
const monster5MoveLeftAnimation = new Animation(monster5AnimationSheet, 1, [5, 5, 5, 5]);
const monster5MoveRightAnimation = new Animation(monster5AnimationSheet, 2, [5, 5, 5, 5]);
const monster5MoveUpAnimation = new Animation(monster5AnimationSheet, 3, [5, 5, 5, 5]);

const monst5 = new Cmonster(canvas.width/2, canvas.height/2, function() {return this.x - player.x + player.x_init;}, function() {return this.y - player.y + player.y_init;},
32, 48, scale, 13, margins = marg_rhodey, name="monst5");
monst5.image.src = "images/rhodey.png";
monst5.animations.push(monster5MoveDownAnimation);
monst5.animations.push(monster5MoveLeftAnimation);
monst5.animations.push(monster5MoveRightAnimation);
monst5.animations.push(monster5MoveUpAnimation);
monst5.animation = monst5.animations[0];
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
