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
    
    move() {

        randmove(this);    

        camina(this);
    }
};
