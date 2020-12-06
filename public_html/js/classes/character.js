/*
 * Character class
 */

class Ccharacter extends Centity {
    constructor(x, y, width, height, scale, speed, margins, name, clase="null") {
        super(x, y, width*scale, height*scale, speed,
        margins.map(function(x) {return Math.floor(x*scale); } ), name);
        this._clase = clase;
    }

    get clase() {return this._clase;}

    //update() {
        //update position
        //move
    //}

   move() {

    }

}
