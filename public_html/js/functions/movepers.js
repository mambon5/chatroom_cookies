/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function camina(obj) {
    if(obj.frameX < 3 && obj.moving) {
        obj.frameX++;
    }
    else {
        obj.frameX = 0;
    }
}