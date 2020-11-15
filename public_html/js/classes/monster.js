/* 
 * Monster class
 */


class Cmonster extends Ccharacter {
    constructor(x, y, callback_x_cent, callback_y_cent, width, height, scale=1, speed) {
        super(x, y, width, height, scale, speed);
        this._callback_x_cent = callback_x_cent;
        this._callback_y_cent = callback_y_cent;
        this._pastdir = -1;
    }
    
    get x_cent() {return this._callback_x_cent;}
    get y_cent() {return this._callback_y_cent;}
    
    randmove() {
    this._moving = false;
    let num = Math.floor(Math.random()*10);
    if(this._pastdir === -1 || num > 8) {
        let num = Math.floor(Math.random()*5);
        this._pastdir = num;
    } else {num = this._pastdir;}
        if( num===1  ){
            this._frameY = 3;
            apuramove(this, 1);
        }
        if( num===2   ){
            this.frameY = 0;
            apuramove(this, 3);
        }
        if( num===3 ){
            this.frameY = 1;
             apuramove(this, 4);
         }
        if( num===4 ){
            this.frameY = 2;
             apuramove(this, 2);
        }
    
    camina(this);
    }
};
