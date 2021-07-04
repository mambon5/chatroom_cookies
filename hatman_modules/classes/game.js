/*
 * Game class
 */

//copy the classes Cgame and CcharacterManagers as classes of the server. TO 
//have them twice.

if (typeof module !== "undefined" && module.exports) {
   
    var map = require('./map');
    var transpose = map.transpose;
    var Cmap = map.Cmap;     

}

class Cgame {
    
    
    constructor(fps) { //filas, columnas
        this._fps = fps;
        this._now;
        this._then;
        this._elapsed;
        this._started = false;
    }
    
    generate_objs() {
        const stove1 = new Cobject(canvasw / 10 * 6, canvash * 2 / 3, 34, 60, scale, 0, 
margins.marg_stove, "stove11", "obj");
        classes.CobjectManager.add(stove1);
        classes.CentityManager.fillArray();
    }
    
    get started() {return this._started;}

    loop() {
        this._now = Date.now();
        this._elapsed = this._now - this._then;
        //aux1.innerHTML = "now: " + now + "<br> then: " + then;
        if(this._elapsed > 1000/this._fps) {
            this._then = this._now;

            //ctx.clearRect(0,0,canvas.width,canvas.height);
            
            //map.recalculateCenter();  // Quotient Space!!!
           //retreive player positiosn
           
           
            classes.CentityManager.update();
            classes.CentityManager.emit();
            classes.CentityManager.resetdirs();
            
            
//            map.drawmatrix();
//            CentityManager.draw();
//            aux2.innerHTML = "x: " + Math.round(player.x) + ", y: " + Math.round(player.y);
            //imgmargins(ctx, canvas.width/2, canvas.height/2, player.width, player.height);
            /*tempCtx.drawImage(player.animation.animationSheet.image, 0, 0, 150, 150, 0,0, 150, 150);
            let hey = checkTransparency(tempCtx, 0, 0, 150, 150);
            aux2.innerHTML = "left: " + hey[0] + "<br> top: " + hey[1] + "<br> right: " + hey[2] + "<br> bottom: " + hey[3];*/
        }

        setImmediate(function() { 
            game.loop();
        });
    }

    startGame() {
        this._started = true;
        this._then = Date.now();
        this.generate_objs();
        classes.CobjectManager.generateValidPoses();       
        
        this.loop();
        
    }
}


if (typeof module !== "undefined" && module.exports) {
    module.exports = Cgame;
}