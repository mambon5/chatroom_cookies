/*
 * Game class
 */

class Cgame {
    constructor(fps) { //filas, columnas
        this._fps = fps;
        this._now;
        this._then;
        this._elapsed;
    }

    loop() { //needs to be generalized
        this._now = Date.now();
        this._elapsed = this._now - this._then;
       aux2.innerHTML = "pos x: " + CcharacterManager.hello() + " <br>pos y: " + player.y;
    //    aux1.innerHTML = "now: " + now + "<br> then: " + then;
        if(this._elapsed > 1000/this._fps) {
            this._then = this._now;
            //vector.update()
            //vector.draw()
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage(background.image, background.x(), background.y(), canvas.width, canvas.height);
            map.drawmatrix(canvas.width, canvas.height);


    //        ctx.fillStyle = "red";
    //        ctx.fillRect(player.x_init, player.y_init, player.width, player.height);
    //        ctx.fillStyle = "black";
            player.draw();
            //drawobject(ctx, monst1);
            //ctx.drawImage(player.image, player.frameX*player.frameW, player.frameY*player.frameH, player.frameW, player.frameH, player.x_init, player.y_init, player.width, player.height);
            ctx.drawImage(monst1.animation.animationSheet.image, monst1.animation.currentFrame*monst1.animation.animationSheet.frameWidth, monst1.animation.animation*monst1.animation.animationSheet.frameHeight, monst1.animation.animationSheet.frameWidth, monst1.animation.animationSheet.frameHeight, monst1.x_cent(), monst1.y_cent(), monst1.width, monst1.height);
            monst1.move();
            ctx.drawImage(monst2.animation.animationSheet.image, monst2.animation.currentFrame*monst2.animation.animationSheet.frameWidth, monst2.animation.animation*monst2.animation.animationSheet.frameHeight, monst2.animation.animationSheet.frameWidth, monst2.animation.animationSheet.frameHeight, monst2.x_cent(), monst2.y_cent(), monst2.width, monst2.height);
            monst2.move();
            ctx.drawImage(monst3.animation.animationSheet.image, monst3.animation.currentFrame*monst3.animation.animationSheet.frameWidth, monst3.animation.animation*monst3.animation.animationSheet.frameHeight, monst3.animation.animationSheet.frameWidth, monst3.animation.animationSheet.frameHeight, monst3.x_cent(), monst3.y_cent(), monst3.width, monst3.height);
            monst3.move();
            ctx.drawImage(monst4.animation.animationSheet.image, monst4.animation.currentFrame*monst4.animation.animationSheet.frameWidth, monst4.animation.animation*monst4.animation.animationSheet.frameHeight, monst4.animation.animationSheet.frameWidth, monst4.animation.animationSheet.frameHeight, monst4.x_cent(), monst4.y_cent(), monst4.width, monst4.height);
            monst4.move();
            ctx.drawImage(monst5.animation.animationSheet.image, monst5.animation.currentFrame*monst5.animation.animationSheet.frameWidth, monst5.animation.animation*monst5.animation.animationSheet.frameHeight, monst5.animation.animationSheet.frameWidth, monst5.animation.animationSheet.frameHeight, monst5.x_cent(), monst5.y_cent(), monst5.width, monst5.height);
            monst5.move();
            player.move();
//            getpixelmats(ctx, player.x_init, player.y_init, player.width, player.height);
//            outputpixels(ctx);
         //imgmargins(ctx, player.x_init, player.y_init, player.width, player.height);
        }
        requestAnimationFrame(()=>this.loop());
    }

    startGame() {
        this._then = Date.now();

        this.loop();
    }
}
