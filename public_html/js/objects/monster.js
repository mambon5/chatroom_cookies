/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Cmonster extends Cplayer {
     constructor(callback_x, callback_y, x_init, y_init, width, height, scale=1, speed) {
        super(x_init, y_init, width, height, scale, speed);
        this._callback_x = callback_x;
        this._callback_y = callback_y;
    }
    
     get x() {return this._callback_x;}
    get y() {return this._callback_y;}
    
//    randmove() {
//         player.moving = false;
//         
//    if( (keys[38] || keys[87])  ){
//        player.frameY = 3;
//        apuramove(player, 1, canvas.width, canvas.height);
//    }
//    if( (keys[40] || keys[83])   ){
//        player.frameY = 0;
//        apuramove(player, 3, canvas.width, canvas.height);
//    }
//    if( (keys[37] || keys[65]) ){
//        player.frameY = 1;
//        apuramove(player, 4, canvas.width, canvas.height);
//    }
//    if( (keys[39] || keys[68]) ){
//        player.frameY = 2;
//        apuramove(player, 2, canvas.width, canvas.height);
//    }
//    if(player.frameX < 3 && player.moving) {
//        player.frameX++;
//    }
//    else {
//        player.frameX = 0;
//    }
//    }
};
