/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var movmat = [
                [0,0,1,1,0],
                [1,1,1,1,1],
                [0,1,1,1,0],
                [0,1,1,1,0],
                [0,0,1,1,0]
            ];
            
function validpos(objx, objy, canvW, canvH) {
    let f = movmat.length;
    let c = movmat[0].length;
    let resh = canvW/c;
    let resv = canvH/f;
    
    pos1 = Math.floor(objx/resh);
    pos2 = Math.floor(objy/resv);
    
    
    
    
    if(pos2 <0 || pos2 > f-1 || pos1<0 || pos1 > c-1) return 0;
    
    aux1.innerHTML = "files: " + f + ", columnes: " + c + "<br>, canvW: " + canvW +
            " resv:" + resv + " resh" + resh + "<br> pos1: "+pos1 +
            ", pos2: " + pos2 + "<br> validpos: " + movmat[pos2][pos1];
    
    return movmat[pos2][pos1];
}


