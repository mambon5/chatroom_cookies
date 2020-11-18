/* 
 * Character class
 */

class Ccharacter extends Centity {
    constructor(x, y, width, height, scale, speed, margins) {
        super(x, y, width*scale, height*scale, speed, 
        margins.map(function(x) {return Math.floor(x*scale) } ));
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
        
        let marg = this.margins;//margins are left, top, right, bottom
        
        let canvW = canvas.width;
        let canvH = canvas.height;
        let resol = map.getresol(canvW, canvH); // get resolution of each cell
        
        let x = this.x + marg[0];
        let y = this.y + marg[1];
        let width = this.width - marg[0] - marg[2];
        let height = this.height - marg[1] - marg[3];
        
        let pos = map.getmatpos(x, y, canvW, canvH);
        let newpos = 0;
        if( dir==8 || dir===1 || dir == 2) {
            newpos = [x , y - this.speed , width, height];
            if( map.validcorners(newpos[0] , newpos[1] , newpos[2], newpos[3], canvW, canvH)) {
                this.y -= this.speed;
                this.moving = true;
            } else {
                let limy = pos[0]*resol[1] ;
                let speed = y - limy - 1;
                if(speed>0) {
                    this.y -= speed;
                    this.moving = true;
                }
            }
            
        }
        x = this.x + marg[0];
        y = this.y + marg[1];
        pos = map.getmatpos(x, y, canvW, canvH);
        
        if(dir===2 || dir == 3 ||dir == 4) {
            newpos = [x + this.speed ,y , width, height];
            if( map.validcorners(newpos[0] , newpos[1] , newpos[2], newpos[3], canvW, canvH)) {
                this.x += this.speed;
                this.moving = true;
            } else {
                let limx = (pos[1]+1)*resol[0] ;
                let speed = limx - (x + width) - 1;
                if(speed>0) {
                    this.x += speed;
                    this.moving = true;
                }
            }
        }
        x = this.x + marg[0];
        y = this.y + marg[1];
        pos = map.getmatpos(x, y, canvW, canvH);
        if(dir===4 || dir == 5 ||dir == 6) {
            newpos = [x  , y + this.speed , width, height];
            if( map.validcorners(newpos[0] , newpos[1] , newpos[2], newpos[3], canvW, canvH)) {
                this.y += this.speed;
                this.moving = true;
            } else {
                let limy = (pos[0]+1)*resol[1] ;
                let speed = limy - (y+height) - 1;
                if(speed>0) {
                    this.y += speed;
                    this.moving = true;
                }
            }
        }
        x = this.x + marg[0];
        y = this.y + marg[1];
        pos = map.getmatpos(x, y, canvW, canvH);
        if(dir===6 || dir == 7 ||dir == 8) {
            newpos = [x - this.speed, y , width, height];
            if( map.validcorners(newpos[0] , newpos[1] , newpos[2], newpos[3], canvW, canvH)) {
                this.x -= this.speed;
                this.moving = true;
            } else {
                let limx = pos[1]*resol[0] ;
                let speed = x - limx - 1;
                if(speed>0) {
                    this.x -= speed;
                    this.moving = true;
                }
            }
        }
    }
}