const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = 930;
canvas.height = 462;

const background = new Image();
background.src = "images/firstroom.png";

function animate()
{
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
}

animate();
