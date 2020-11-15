/* 
 * Character class
 */

class Ccharacter extends Centity {
    constructor(x, y, width, height, scale, speed) {
        super(x, y, width*scale, height*scale, speed);
        this._x_init = x;
        this._y_init = y;
        this._frameX = 0;
        this._frameY = 0;
        this._frameW = width;
        this._frameH = height;
        this._moving = false;
    }
    
    get x_init() {return this._x_init;}
    get y_init() {return this._y_init;}
    get frameX() {return this._frameX;}
    get frameY() {return this._frameY;}
    get frameW() {return this._frameW;}
    get frameH() {return this._frameH;}
    get moving() {return this._moving;}
    
    set frameX(e) {this._frameX = e;}
    set frameY(e) {this._frameY = e;}
    set moving(e) {this._moving = e;}
    
    move() {
        
    }
    
    
}