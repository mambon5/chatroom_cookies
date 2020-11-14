/* 
 * Background class
 */

class Cbackground {
    constructor(callback_x, callback_y) {
        this._callback_x = callback_x;
        this._callback_y = callback_y;
        this._image = new Image();
    }
    
    x() {this._callback_x;};
    
    y() {this._callback_y;};
    
    get image() {return this._image;}
    
    set image(e) {this._image = e;}
    
    setImage(s) {
        this._image.src = s;
    }
    
    getImage() {
        return this._image;
    }
};