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
            ctx.drawImage(background.image, background.x(), background.y(), canvas.width, canvas.height);
            map.drawmatrix(canvas.width, canvas.height);

            CcharacterManager.update();
            CcharacterManager.draw();
            imgmargins(ctx, canvas.width/2, canvas.height/2, player.width, player.height);

        }
        requestAnimationFrame(()=>this.loop());
    }

    startGame() {
        this._then = Date.now();
        this.loop();
    }
}
