/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Cmonster extends Cplayer {
     constructor(x, y, callback_x_cent, callback_y_cent, x_init, y_init, width, height, scale=1, speed) {
        super(x_init, y_init, width, height, scale, speed);
        this._x = x;
        this._y = y;
        this._callback_x_cent = callback_x_cent;
        this._callback_y_cent = callback_y_cent;
    }
    
    get x() {return this._x;}
    get y() {return this._y;}
    get x_cent() {return this._callback_x_cent;}
    get y_cent() {return this._callback_y_cent;}
    
    set x(e) {this._x = e;};
    set y(e) {this._y = e;};
    
    randmove() {
    this._moving = false;
    let num = Math.floor(Math.random()*5);
    if( num===1  ){
        this._frameY = 3;
//        this._x += this.speed;
        apuramove(this, 1);
    }
    if( num===2   ){
        this.frameY = 0;
        apuramove(this, 3);
    }
    if( num===3 ){
        this.frameY = 1;
         apuramove(this, 4);
     }
    if( num===4 ){
        this.frameY = 2;
         apuramove(this, 2);
    }
    camina(this);
    }
};
