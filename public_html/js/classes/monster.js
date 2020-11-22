/*
 * Monster class
 */


class Cmonster extends Ccharacter {
    constructor(x, y, callback_x_cent, callback_y_cent, width, height, scale=1, speed, margins, name="") {
        super(x, y, width, height, scale, speed, margins);
        this._callback_x_cent = callback_x_cent;
        this._callback_y_cent = callback_y_cent;
        this._pastdir = -1;
        this._name = name;
    }

    get x_cent() {return this._callback_x_cent;}
    get y_cent() {return this._callback_y_cent;}
    get name() {return this._name;}

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
        if(num < 9 && num > 0) {
          super.apuramove(num);
          this.animation.animating = true;
        } else{
          this.animation.animating = false;
        }

    }
};
