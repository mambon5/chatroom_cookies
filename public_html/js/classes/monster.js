/*
 * Monster class
 */


class Cmonster extends Ccharacter {
    constructor(x, y, callback_x_cent, callback_y_cent, width, height, scale=1, speed, margins, name="", clase="char") {
        super(x, y, width, height, scale, speed, margins, name, clase);
        this._callback_x_cent = callback_x_cent;
        this._callback_y_cent = callback_y_cent;
        this._pastdir = -1;
    }

    get x_cent() {return this._callback_x_cent;}
    get y_cent() {return this._callback_y_cent;}

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
               bubble1.host = xoc;
            }
            
        } else {
          this.animation.animating = false;
        }
    }

    draw() {
        ctx.drawImage(this.animation.animationSheet.image, this.animation.currentFrame*this.animation.animationSheet.frameWidth, this.animation.animation*this.animation.animationSheet.frameHeight, this.animation.animationSheet.frameWidth, this.animation.animationSheet.frameHeight, this.x_cent(), this.y_cent(), this.width, this.height);
    }
};
