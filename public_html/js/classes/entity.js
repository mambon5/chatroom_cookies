/* 
 * Entity class, a being with independent existence
 */

class Centity extends Crectangle {
    constructor(x, y, width, height, speed, margins = [0,0,0,0]) {
        super(x, y, width, height);
        this._speed = speed;
        this._image = new Image();
        this._margins = margins;
    }
    
    get speed() {return this._speed;}
    get image() {return this._image;}
    get margins() {return this._margins;}
    
    set speed(e) {this._speed = e;}
    set image(e) {this._image = e;}
    set margins(e) {this._margins = e;} //margins are left, top, right, bottom
};
