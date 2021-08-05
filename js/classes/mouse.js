/* 
 * Entity class, a being with independent existence
 */

if (typeof module !== "undefined" && module.exports) {
    Crectangle = require("./rectangle");
}


class Cmouse extends Crectangle {
    constructor(x, y, width, height, scale, mouseup=false, mousedown=false, click=false) {
        super(x, y, width, height,scale);
        this._mouseup = mouseup;
        this._mousedown = mousedown;
        this._click = click;
    }

    get mouseup() { return this._mouseup; }
    get mousedown() { return this._mousedown; }
    get click() { return this._click; }
    
    set mouseup(e) { this._mouseup = e; }
    set mousedown(e) { this._mousedown = e; }
    set click(e) { this._click = e; }

    clearEvents(){
        this._mouseup = false;
        this._click = false;
    }
};


if (typeof module !== "undefined" && module.exports) {
    module.exports = Cmouse;
}