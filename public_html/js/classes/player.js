/* 
 * Player class
 */

class Cplayer extends Ccharacter {
    constructor(x, y, width, height, scale, speed, margins, name="hero") {
        super(x, y, width, height, scale, speed, margins);
         this._name = name;
    }
    get name() {return this._name;}
    
    move() {
        this.moving = false;
        if( (keys[38] || keys[87])  ){
            this.frameY = 3;
            super.apuramove(1);
        }
        if( (keys[40] || keys[83])   ){
            this.frameY = 0;
            super.apuramove(5);
        }
        if( (keys[37] || keys[65]) ){
            this.frameY = 1;
            super.apuramove(7);
        }
        if( (keys[39] || keys[68]) ){
            this.frameY = 2;
            super.apuramove(3);
        }
        if(this.frameX < 3 && this.moving) {
            this.frameX++;
        }
        else {
            this.frameX = 0;
        }
    }
    
    draw() {
        ctx.drawImage(this.image, this.frameX*this.frameW, this.frameY*this.frameH, this.frameW, this.frameH, this.x_init, this.y_init, this.width, this.height);
    }
};
