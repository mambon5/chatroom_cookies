/*
 * Character class
 */

class Ccharacter extends Centity {
    constructor(x, y, width, height, scale, speed, margins, name, clase="null") {
        super(x, y, width*scale, height*scale, speed,
        margins.map(function(x) {return Math.floor(x*scale); } ));
        this._x_init = x;
        this._y_init = y;
        this._moving = false;
        this._animation = null;
        this._animations = [];
        this._name = name;
        this._clase = clase;
    }

    get x_init() {return this._x_init;}
    get y_init() {return this._y_init;}
    get moving() {return this._moving;}
    get animations() {return this._animations;}
    get animation() {return this._animation;}
    get name() {return this._name;}
    get clase() {return this._clase;}

    set moving(e) {this._moving = e;}
    set animations(e) {this._animations = e;}
    set animation(e) {this._animation = e;}

    //update() {
        //update position
        //move
    //}

   move() {

    }

   choque(dir) {
    var arrxoc = []; //array con characteres excepto el mismo
    let cind=-1;
    for(let i = 0; i < v.length; i++){ 
        if(v[i].name !== this.name) arrxoc.push(v[i].cut_rect());
        else cind = i;//get this character index for later use
    }
    
    let cutrect = super.cut_rect();
    cutrect.dirmove(dir); //this moves the cut rectangle in order to foresee where the 
                //ninotet will be after the move
                
    let index = arrayxoc(cutrect, arrxoc);
    let obj = "null";
    if(cind < index) index +=1;
    if(index > (-1)) obj = v[index];
    
    return obj;
    
    }

    generateValidPos() {
        let x = -1;
        let y = -1;
        while( this.choque(0)!=="null" || !map.validcorners(x, y, this.width, this.height, canvas.width, canvas.height)) {
            x = Math.random() * map._resh * map._cols;
            y = Math.random() * map._resv * map._rows;
            this.x = x;
            this.y = y;
        }
        return [x, y];
    }

    apuramove(dir) {    //dir is 1-top 2-right 3-down 4-left

        let marg = this.margins;//margins are left, top, right, bottom

        let canvW = canvas.width;
        let canvH = canvas.height;
        let resol = map.getresol(); // get resolution of each cell

        let cutrect = super.cut_rect(); //cuts rectangl according to margins

        let pos = map.getmatpos(cutrect.x, cutrect.y);
        
        let rspeed = 0;
        
        if(dir===2 || dir===4 ||dir === 6 ||dir === 8 ) {
            Math.floor(rspeed=this.speed/Math.sqrt(2));
        }
        else rspeed = this.speed; //adjusting speed for diagonal displacement
        if( dir==8 || dir===1 || dir == 2) {
            if( map.validcorners(cutrect.x , cutrect.y - rspeed , cutrect.width, cutrect.height, canvW, canvH)) {
                this.y -= rspeed;
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
        pos = map.getmatpos(cutrect.x, cutrect.y);
        if(dir===2 || dir == 3 ||dir == 4) {
            if( map.validcorners(cutrect.x + rspeed ,cutrect.y , cutrect.width, cutrect.height, canvW, canvH)) {
                this.x += rspeed;
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
        pos = map.getmatpos(cutrect.x, cutrect.y);
        if(dir===4 || dir == 5 ||dir == 6) {
            if( map.validcorners(cutrect.x  , cutrect.y +rspeed , cutrect.width, cutrect.height, canvW, canvH)) {
                this.y += rspeed;
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
        pos = map.getmatpos(cutrect.x, cutrect.y);
        if(dir===6 || dir == 7 ||dir == 8) {
            if( map.validcorners(cutrect.x - rspeed, cutrect.y , cutrect.width, cutrect.height, canvW, canvH)) {
                this.x -= rspeed;
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
