
if (typeof module !== "undefined" && module.exports) {
    Centity = require("./entity");
}

class Cobject extends Centity {
     constructor(x, y, width, height, scale, speed, margins, name="", clase = "obj") {
        super(x, y, width*scale, height*scale, speed, margins, name, clase);
         this._pastdir = -1;
         this._clase = clase;
         this._scale = scale;
    }

    get scale() {return this._scale;}
    
    set scale(e) {this._scale = e;}
    
    move() {

    }
   
    draw() {
        this.animation.animate();
        let x  = this.x - player.x + player.x_init;
        let y  = this.y - player.y + player.y_init;
        ctx.drawImage(this.animation.animationSheet.image, this.animation.currentFrame*this.animation.animationSheet.frameWidth, this.animation.animation*this.animation.animationSheet.frameHeight, this.animation.animationSheet.frameWidth, this.animation.animationSheet.frameHeight, x, y, this.width, this.height);
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = Cobject;
}