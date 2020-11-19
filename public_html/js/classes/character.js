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
                
        let cutrect = super.cut_rect(); //cuts rectangl according to margins

        let pos = map.getmatpos(cutrect.x, cutrect.y, canvW, canvH);
        if( dir==8 || dir===1 || dir == 2) {
            if( map.validcorners(cutrect.x , cutrect.y - this.speed , cutrect.width, cutrect.height, canvW, canvH)) {
                this.y -= this.speed;
                this.moving = true;
            } else {
                let limy = pos[0]*resol[1] ;
                let speed =  cutrect.y - limy - 1;
                if(speed>0) {
                    this.y -= speed;
                    this.moving = true;
                }
            }
            
        }
        
        cutrect = super.cut_rect();
        
        pos = map.getmatpos(cutrect.x, cutrect.y, canvW, canvH);
        
        if(dir===2 || dir == 3 ||dir == 4) {
            if( map.validcorners(cutrect.x + this.speed ,cutrect.y , cutrect.width, cutrect.height, canvW, canvH)) {
                this.x += this.speed;
                this.moving = true;
            } else {
                let limx = (pos[1]+1)*resol[0] ;
                let speed = limx - (cutrect.x + cutrect.width) - 1;
                if(speed>0) {
                    this.x += speed;
                    this.moving = true;
                }
            }
        }
        cutrect = super.cut_rect();
        
        pos = map.getmatpos(cutrect.x, cutrect.y, canvW, canvH);
        if(dir===4 || dir == 5 ||dir == 6) {
            if( map.validcorners(cutrect.x  , cutrect.y + this.speed , cutrect.width, cutrect.height, canvW, canvH)) {
                this.y += this.speed;
                this.moving = true;
            } else {
                let limy = (pos[0]+1)*resol[1] ;
                let speed = limy - (cutrect.y+cutrect.height) - 1;
                if(speed>0) {
                    this.y += speed;
                    this.moving = true;
                }
            }
        }
        cutrect = super.cut_rect();
        pos = map.getmatpos(cutrect.x, cutrect.y, canvW, canvH);
        if(dir===6 || dir == 7 ||dir == 8) {
            if( map.validcorners(cutrect.x - this.speed, cutrect.y , cutrect.width, cutrect.height, canvW, canvH)) {
                this.x -= this.speed;
                this.moving = true;
            } else {
                let limx = pos[1]*resol[0] ;
                let speed = cutrect.x - limx - 1;
                if(speed>0) {
                    this.x -= speed;
                    this.moving = true;
                }
            }
        }
    }
}