const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

const persimg = new Image();
persimg.src = "images/henryjones.png";

const background = new Image();
background.src = "images/firstroom.png";


function animate()
{
    ctx.drawImage(background,0,0,canvas.width,canvas.height);    
    
    ctx.drawImage(persimg, 0, 0, 128/4, 192/4, 10, 10, 128/4, 192/4);
    requestAnimationFrame(animate);
    
}

animate();

window.addEventListener("keydown")