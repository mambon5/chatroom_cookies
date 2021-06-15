/*
 * Monster class
 */
if (typeof module !== "undefined" && module.exports) {
    Ccharacter = require("./character");
}

class Cmonster extends Ccharacter {
    constructor(x, y, width, height, scale=1, speed, margins, name="", clase="char") {
        super(x, y, width, height, scale, speed, margins, name, clase);
        this._pastdir = -1;
    }

   

    move() {
        this.randmove();
        this.animation.animate();
    }

    randmove() {
        this._moving = false;
        let num = Math.floor(Math.random()*20);
        if(this._pastdir === -1 || num > 18) {
            let num = Math.floor(Math.random()*10);
            this._pastdir = num;
        } else {
            num = this._pastdir;
        }
        if( num===1 || num === 2 ){
            this.animation = this.animations[3];
        }
        if( num===3 || num === 4 ){
            this.animation = this.animations[2];
        }
        if( num===5 || num === 6 ){
            this.animation = this.animations[0];
        }
        if( num===7 || num === 8 ){
            this.animation = this.animations[1];
        }
        let xoc = super.choque(num);
        if(num < 9 && num > 0 ){
            if( xoc === "null") {
                super.apuramove(num);
                this.animation.animating = true;
            }
            else if(this === bubble1.host && xoc.clase==="char" ){
               bubtake = Date.now();
               bubble1.host = xoc;
            }
            
        } else {
          this.animation.animating = false;
        }
    }

    draw() {
        let x  = this.x - player.x + player.x_init;
        let y  = this.y - player.y + player.y_init;
        ctx.drawImage(this.animation.animationSheet.image, this.animation.currentFrame*this.animation.animationSheet.frameWidth, this.animation.animation*this.animation.animationSheet.frameHeight, this.animation.animationSheet.frameWidth, this.animation.animationSheet.frameHeight, x, y, this.width, this.height);
        ctx.font = "30px Verdana";
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0"," magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        // Fill with gradient
        ctx.fillStyle = gradient;
        var wt = ctx.measureText(this._name);//text width  
        console.log(wt.width)
        ctx.fillText(this._name ,x - wt.width/2 + this._width/2,y);
    }
};


if (typeof module !== "undefined" && module.exports) {
    module.exports = Cmonster;
}