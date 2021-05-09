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

    loop() {
        this._now = Date.now();
        this._elapsed = this._now - this._then;
        //aux1.innerHTML = "now: " + now + "<br> then: " + then;
        if(this._elapsed > 1000/this._fps) {
            this._then = this._now;

            ctx.clearRect(0,0,canvas.width,canvas.height);
            
            map.recalculateCenter();  // Quotient Space!!!

            CentityManager.update();
            map.drawmatrix();
            CentityManager.draw();
            //imgmargins(ctx, canvas.width/2, canvas.height/2, player.width, player.height);
            /*tempCtx.drawImage(player.animation.animationSheet.image, 0, 0, 150, 150, 0,0, 150, 150);
            let hey = checkTransparency(tempCtx, 0, 0, 150, 150);
            aux2.innerHTML = "left: " + hey[0] + "<br> top: " + hey[1] + "<br> right: " + hey[2] + "<br> bottom: " + hey[3];*/
        }
        requestAnimationFrame(()=>this.loop());
    }

    startGame() {
        this._then = Date.now();
        this.loop();
    }
}
