/* 
 * Game class
 */

class Cgame {
    constructor(fps) {
        this._fps = fps;
        this._now;
        this._then;
        this._elapsed;
    }
    
    loop() { //needs to be generalized
        this._now = Date.now();
        this._elapsed = this._now - this._then;
    //    aux2.innerHTML = "pos x: " + player.x + " <br>pos y: " + player.y;
    //    aux1.innerHTML = "now: " + now + "<br> then: " + then;
        if(this._elapsed > this._fps) {
            this._then = this._now;
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
        requestAnimationFrame(()=>this.loop());
    }
    
    startGame() {
        this._then = Date.now();
        this.loop();
    }
}