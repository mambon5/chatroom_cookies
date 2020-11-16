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
            map.drawmatrix(canvas.width, canvas.height);
    //        ctx.fillStyle = "red";
    //        ctx.fillRect(player.x_init, player.y_init, player.width, player.height);
    //        ctx.fillStyle = "black";
            player.draw();
            //drawobject(ctx, monst1);
            //ctx.drawImage(player.image, player.frameX*player.frameW, player.frameY*player.frameH, player.frameW, player.frameH, player.x_init, player.y_init, player.width, player.height);
            ctx.drawImage(monst1.image, monst1.frameX*monst1.frameW, monst1.frameY*monst1.frameH, monst1.frameW, monst1.frameH, monst1.x_cent(), monst1.y_cent(), monst1.width, monst1.height);
            monst1.move();
            ctx.drawImage(monst2.image, monst2.frameX*monst2.frameW, monst2.frameY*monst2.frameH, monst2.frameW, monst2.frameH, monst2.x_cent(), monst2.y_cent(), monst2.width, monst2.height);
            monst2.move();
            ctx.drawImage(monst3.image, monst3.frameX*monst3.frameW, monst3.frameY*monst3.frameH, monst3.frameW, monst3.frameH, monst3.x_cent(), monst3.y_cent(), monst3.width, monst3.height);
            monst3.move();
            ctx.drawImage(monst4.image, monst4.frameX*monst4.frameW, monst4.frameY*monst4.frameH, monst4.frameW, monst4.frameH, monst4.x_cent(), monst4.y_cent(), monst4.width, monst4.height);
            monst4.move();
            player.move();
            
            getpixelmats(ctx);
            outputpixels(ctx);
            
            
        }
        requestAnimationFrame(()=>this.loop());
    }
    
    startGame() {
        this._then = Date.now();
        this.loop();
    }
}
