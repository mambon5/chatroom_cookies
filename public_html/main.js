const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

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

function animate()
{
    ctx.drawImage(background,0,0,canvas.width,canvas.height);    
    
    ctx.drawImage(persimg,player.frameX,player.frameY,player.width,player.height,player.hi(),player.y,player.frameW,player.frameH);
    requestAnimationFrame(animate);
}

animate();
