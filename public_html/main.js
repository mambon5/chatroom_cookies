const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

const person = document.getElementById('personatge');
const personctx = person.getContext('2d');
person.width = 30;
person.height = 20;

const persimg = new Image();
persimg.src = "images/henryjones.png";

const background = new Image();
background.src = "images/firstroom.png";

function animate()
{
    ctx.drawImage(background,0,0,canvas.width,canvas.height);    
    
    personctx.drawImage(persimg,0,0,person.width,person.height);
    requestAnimationFrame(animate);
}

animate();
