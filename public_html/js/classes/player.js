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
        let dir = 0;
        this.moving = false;
        if( (keys[38] || keys[87])  ){//up
            this.frameY = 3;
            dir=1;
        }
        if( (keys[40] || keys[83])   ){//down
            this.frameY = 0;
            dir=5;
        }
        if( (keys[37] || keys[65]) ){//left
            this.frameY = 1;
            if(dir === 1) dir=8;
            else if(dir === 5) dir = 6;
            else dir = 7;
        }
        if( (keys[39] || keys[68]) ){//right
            this.frameY = 2;
            if(dir === 1) dir=2;
            else if(dir === 5) dir = 4;
            else dir = 3;
        }
        if(dir !== 0) super.apuramove(dir);;
        
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
