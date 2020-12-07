
var bubtake = Date.now();

class Cbubble extends Cobject {
     constructor(x, y, width, height, scale, speed, margins, name, host) {
        super(x, y, width, height, scale, speed, margins, name);
        this._host = host; //host is the character que la pilla.
    }
    get host(){return this._host;}
    
    set host(e){this._host = e; }

    move() {
        this.x =  this._host.x  + this._host.width/2 - this.width/2;
        this.y = this._host.y  - this.width;
   }
   
   draw() {
        this.animation.animate();
        super.draw();
    }
}
   



