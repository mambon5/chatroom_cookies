/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var movmat = [
                [0,0,1,1,0,0],
                [1,1,1,1,1,1],
                [0,1,1,1,0,1],
                [0,1,1,1,0,1],
                [0,0,1,1,0,1]
            ];
        
function validcorners( objx, objy, objw, objh, canvW, canvH ) {
    return validpos(objx, objy, canvW, canvH) && validpos(objx + objw, objy, canvW, canvH) &&
           validpos(objx, objy + objh, canvW, canvH) && validpos(objx + objw, objy + objh, canvW, canvH);
}       
       
function validpos(objx, objy,canvW, canvH) {
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


function drawmatrix(canvW, canvH) {
    let f = movmat.length;
    let c = movmat[0].length;
    let resh = canvW/c;
    let resv = canvH/f;
    
    x = player.x_init - player.x;
    y = player.y_init - player.y;
    
    for(i=0;i<c;i++){
        for(j=0;j<f;j++){
            if(movmat[j][i])  ctx.strokeRect(i*resh+x,j*resv+y,resh,resv);
            else {
                ctx.globalAlpha = 0.2;
                ctx.fillStyle = "orange";
                ctx.fillRect(i*resh+x,j*resv+y,resh,resv);
                ctx.fillStyle = "black";
                ctx.globalAlpha = 1;
            }
        }
    }
    
}