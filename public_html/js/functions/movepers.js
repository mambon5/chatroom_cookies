/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function randmove(obj) { // move an object randomly in 4 directions
    obj.moving = false;
    let num = Math.floor(Math.random()*10);
    if(obj.pastdir === -1 || num > 8) {
        let num = Math.floor(Math.random()*5);
        obj.pastdir = num;
    } else {num = obj.pastdir;}
        if( num===1 ){
            obj.frameY = 3;
            obj.apuramove(obj, 1);
        }
        if( num===2 ){
            obj.frameY = 0;
           obj.apuramove(obj, 3);
        }
        if( num===3 ){
            obj.frameY = 1;
            obj.apuramove(obj, 4);
         }
        if( num===4 ){
            obj.frameY = 2;
            obj.apuramove(obj, 2);
        }
}