/* 
 * Character class
 */

class Ccharacter extends Centity {
    constructor(x, y, width, height, scale, speed) {
        super(x, y, width*scale, height*scale, speed);
        this._x_init = x;
        this._y_init = y;
        this._frameX = 0;
        this._frameY = 0;
        this._frameW = width;
        this._frameH = height;
        this._moving = false;
    }
    
    get x_init() {return this._x_init;}
    get y_init() {return this._y_init;}
    get frameX() {return this._frameX;}
    get frameY() {return this._frameY;}
    get frameW() {return this._frameW;}
    get frameH() {return this._frameH;}
    get moving() {return this._moving;}
    
    set frameX(e) {this._frameX = e;}
    set frameY(e) {this._frameY = e;}
    set moving(e) {this._moving = e;}
    
    move() {
        
    }
    
    apuramove(dir) {    //dir is 1-top 2-right 3-down 4-left
        let canvW = canvas.width;
        let canvH = canvas.height;
        let resol = map.getresol(canvW, canvH); // get resolution of each cell
        let pos = map.getmatpos(this.x, this.y, canvW, canvH);
        if(dir===1) {
            if( map.validcorners(this.x , this.y - this.speed , this.width, this.height, canvW, canvH)) {
                this.y -= this.speed;
                this.moving = true;
            } else {
                let limy = pos[0]*resol[1];
                let speed = this.y - limy - 1;
                if(speed>0) {
                    this.y -= speed;
                    this.moving = true;
                }
            }
        }
        if(dir===2) {
            if( map.validcorners(this.x + this.speed , this.y , this.width, this.height, canvW, canvH)) {
                this.x += this.speed;
                this.moving = true;
            } else {
                let limx = (pos[1]+1)*resol[0];
                let speed = limx - (this.x+this.width) - 1;
                if(speed>0) {
                    this.x += speed;
                    this.moving = true;
                }
            }
        }
        if(dir===3) {
            if( map.validcorners(this.x  , this.y + this.speed, this.width, this.height, canvW, canvH)) {
                this.y += this.speed;
                this.moving = true;
            } else {
                let limy = (pos[0]+1)*resol[1];
                let speed = limy - (this.y+this.height) - 1;
                if(speed>0) {
                    this.y += speed;
                    this.moving = true;
                }
            }
        }
        if(dir===4) {
            if( map.validcorners(this.x - this.speed, this.y , this.width, this.height, canvW, canvH)) {
                this.x -= this.speed;
                this.moving = true;
            } else {
                let limx = pos[1]*resol[0];
                let speed = this.x - limx - 1;
                if(speed>0) {
                    this.x -= speed;
                    this.moving = true;
                }
            }
        }
    }
}