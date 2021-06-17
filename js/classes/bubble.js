
var bubtake = Date.now();

if (typeof module !== "undefined" && module.exports) {
    Cobject = require("./object");
}

class Cbubble extends Cobject {
     constructor(x, y, width, height, scale, speed, margins, name, host) {
        super(x, y, width, height, scale, speed, margins, name);
        this._host = host; //host is the character que la pilla.
    }
    get host(){return this._host;}
    
    set host(e){this._host = e; }

    move() {
        this.x = this._host.x  + this._host.width*this._host.scale/2 - this.width*this.scale/2 ;
        this.y = this._host.y  - this.height*this.scale  ;
   }
   
   draw() {
        
        super.draw();
    }
}
   


if (typeof module !== "undefined" && module.exports) {
    module.exports.bubtake = bubtake;
    module.exports.Cbubble = Cbubble;
}
