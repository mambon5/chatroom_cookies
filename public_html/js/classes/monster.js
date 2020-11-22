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
        super.moveX();
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
            this._frameY = 3;
        }
        if( num===3 || num === 4 ){
            this._frameY = 2;
        }
        if( num===5 || num === 6 ){
            this._frameY = 0;
        }
        if( num===7 || num === 8 ){
            this._frameY = 1;
        }
        if(num < 9 && num > 0) {
            super.apuramove(num);
        }
    }
    
    draw() {
        ctx.drawImage(this.image, this.frameX*this.frameW, this.frameY*this.frameH, this.frameW, this.frameH, this.x_cent(), this.y_cent(), this.width, this.height);
    }
};
