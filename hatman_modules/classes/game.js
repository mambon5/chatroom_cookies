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
        //fire stove
        const stove1 = new classes.Cobject(canvasw / 10 * 6, canvash * 2 / 3, 34, 60, scale, 0, 
margins.marg_stove, "stove1", "obj");
        classes.CobjectManager.add(stove1);
        
        //empty stove
        const stove2 = new classes.Cobject(canvasw / 10 * 6, canvash * 2 / 3, 34, 60, scale, 0, 
margins.marg_stove, "stove2", "obj");
        classes.CobjectManager.add(stove2);
        
        //barrils de candy aleatoriament
        for(let i=0; i<5; ++i) {
            const barril3 = new  classes.Cobject(canvasw / 10 * 6, canvash * 3 / 3, 32, 37, scale, 0, 
            margins.marg_barril1,  "barrillcandy"+i, "barril candy");
//            barril3.animations.push(new Animation(barril1AnimationSheet, 0, 1));
//            barril3.animation = barril3.animations[0];
         classes.CobjectManager.add(barril3);
        }
        //adding the bubble
       

//        bubble1.animations.push(new Animation(bubble1AnimationSheet, 0, [5,5,5]));
//        bubble1.animation = bubble1.animations[0];
//        bubble1.animation.animating = true;
       
        
        
        
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
            if(vchar.length > 0 && bubble1.host =="empty") {
                var rnd = Math.floor(Math.random()*vchar.length);
                bubble1.host = vchar[rnd];
                console.log("random host: " + rnd);
            }
           
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