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
    
    cut_rect() {
        return new Centity(
                        this.x + this.margins[0], 
                        this.y + this.margins[1],
                        this.width - this.margins[0] - this.margins[2],
                        this.height - this.margins[1] - this.margins[3],
                        this.speed);
    }
    
    dirmove(dir) {
        if(dir===1)  this.y -= this.speed;
        if(dir===2) {this.y -= this.speed; this.x += this.speed}
        if(dir===3) {this.x += this.speed}
        if(dir===4) {this.y += this.speed; this.x += this.speed}
        if(dir===5) {this.y += this.speed}
        if(dir===6) {this.y += this.speed; this.x -= this.speed}
        if(dir===7) {this.x -= this.speed}
        if(dir===8) {this.y -= this.speed; this.x -= this.speed}
    }
};
