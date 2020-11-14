/* 
 * Entity class, a being with independent existence
 */

class Centity extends Crectangle {
    constructor(x, y, width, height, speed) {
        super(x, y, width, height);
        this._speed = speed;
        this._image = new Image();
    }
    
    get speed() {return this._speed;}
    get image() {return this._image;}
    
    set speed(e) {this._speed = e;}
    set image(e) {this._image = e;}
};
