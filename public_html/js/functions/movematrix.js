/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var movmat = [
                [0,0,1,1,0,0,0],
                [1,1,1,1,1,1,0],
                [0,0,1,1,0,1,1],
                [0,1,1,1,0,0,1],
                [0,0,1,1,1,1,1]
            ];
        
function validcorners( objx, objy, objw, objh, canvW, canvH ) {
    return validpos(objx, objy, canvW, canvH) && validpos(objx + objw, objy, canvW, canvH) &&
           validpos(objx, objy + objh, canvW, canvH) && validpos(objx + objw, objy + objh, canvW, canvH);
}       
       
function validpos(objx, objy,canvW, canvH) {
    let f = movmat.length;
    let c = movmat[0].length;
    
    var pos = getmatpos(objx, objy, canvW, canvH);
    pos1 = pos[0];
    pos2 = pos[1];
    
    if(pos2 <0 || pos1 > f-1 || pos1<0 || pos2 > c-1) return 0;
    
    aux1.innerHTML = "matrix pos: " + pos + 
            "<br> valid move: " + movmat[pos1][pos2];
    return movmat[pos1][pos2];
}

function getmatpos(x,y, canvW, canvH) {
    let f = movmat.length;
    let c = movmat[0].length;
    let resh = canvW/c;
    let resv = canvH/f;
    pos2 = Math.floor(x/resh);
    pos1 = Math.floor(y/resv);
    
    return [pos1,pos2];
}

function getresol(canvW, canvH){
    let f = movmat.length;
    let c = movmat[0].length;
    let resh = canvW/c;
    let resv = canvH/f;
    return [resh, resv];
}

function apuramove(obj, dir) { //obj needs to have: x, y, width, height, speed
            //dir is 1-top 2-right 3-down 4-left
            canvW = canvas.width;
            canvH = canvas.height;
     resol = getresol(canvW, canvH); // get resolution of each cell
     let pos = getmatpos(obj.x, obj.y, canvW, canvH);
     if(dir===1) {
         if( validcorners(obj.x , obj.y - obj.speed , obj.width, obj.height, canvW, canvH)) {
            obj.y -= obj.speed;
            obj.moving = true;
         } else {
            let limy = pos[0]*resol[1];
            let speed = obj.y - limy - 1; // treiem 1 pixel perquè la posició no quedi invalida 
            //                          //al final del moviment
            //aux2.innerHTML = "limy: " + limy + ", objy: "+ obj.y +", speed: " + speed;
            if(speed>0) {
                obj.y -= speed;
                obj.moving = true;
            }
         }
     }
     if(dir===2) {
         if( validcorners(obj.x + obj.speed , obj.y , obj.width, obj.height, canvW, canvH)) {
            obj.x += obj.speed;
            obj.moving = true;
         } else {
            let limx = (pos[1]+1)*resol[0];
            let speed = limx - (obj.x+obj.width) - 1;
            //aux2.innerHTML = "limx: " + limx + ", objx: "+ obj.x + ", obj.width:" + obj.width +", speed: " + speed;
            if(speed>0) {
                obj.x += speed;
                obj.moving = true;
            }
         }
     }
     if(dir===3) {
         if( validcorners(obj.x  , obj.y + obj.speed, obj.width, obj.height, canvW, canvH)) {
            obj.y += obj.speed;
            obj.moving = true;
         } else {
            let limy = (pos[0]+1)*resol[1];
            let speed = limy - (obj.y+obj.height) - 1;
            //aux2.innerHTML = "limx: " + limx + ", objx: "+ obj.x + ", obj.width:" + obj.width +", speed: " + speed;
            if(speed>0) {
                obj.y += speed;
                obj.moving = true;
            }
         }
     }
     if(dir===4) {
         if( validcorners(obj.x - obj.speed, obj.y , obj.width, obj.height, canvW, canvH)) {
            obj.x -= obj.speed;
            obj.moving = true;
         } else {
            let limx = pos[1]*resol[0];
            let speed = obj.x - limx - 1; // treiem 1 pixel perquè la posició no quedi invalida 
            //                          //al final del moviment
            //aux2.innerHTML = "limy: " + limy + ", objy: "+ obj.y +", speed: " + speed;
            if(speed>0) {
                obj.x -= speed;
                obj.moving = true;
            }
         }
     }
    
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