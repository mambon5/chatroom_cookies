/* 
 * Player class
 */

class Cplayer extends Ccharacter {
    constructor(x, y, width, height, scale, speed) {
        super(x, y, width, height, scale, speed);
    }
    
    move() {
        this.moving = false;
        if( (keys[38] || keys[87])  ){
            this.frameY = 3;
            apuramove(this, 1);
        }
        if( (keys[40] || keys[83])   ){
            this.frameY = 0;
            apuramove(this, 3);
        }
        if( (keys[37] || keys[65]) ){
            this.frameY = 1;
            apuramove(this, 4);
        }
        if( (keys[39] || keys[68]) ){
            this.frameY = 2;
            apuramove(this, 2);
        }
        if(this.frameX < 3 && this.moving) {
            this.frameX++;
        }
        else {
            this.frameX = 0;
        }
    }
};
