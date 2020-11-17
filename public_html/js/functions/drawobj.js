/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function drawobject(contxt, obj) {
    contxt.drawImage(obj.image, obj.frameX*obj.frameW, obj.frameY*obj.frameH, obj.frameW, obj.frameH, obj.x_init, obj.y_init, obj.width, obj.height);
}

function getpixelmats(contxt, x=0, y=0, width = 10, height=10) {
    //get the 4 matrices from the selected pixels
    let imgData = contxt.getImageData(x,y,width,height);
    let i=0;
    let j=0;
    let matR = [];
    let matG = [];
    let matB = [];
    let matA = [];
    for(var f = 0; f < height; f++) {
        matR[f] = [];
        matG[f] = [];
        matB[f] = [];
        matA[f] = [];
    }
    for (let w = 0; w < imgData.data.length; w += 4) {
        matR[i][j] = imgData.data[w];
        matG[i][j] = imgData.data[w+1];
        matB[i][j] = imgData.data[w+2];
        matA[i][j] = imgData.data[w+3];
        
        ++j;
    if( (w+4) % (width*4) === 0) {
        j=0;
        ++i;
    }
    }
    aux3.innerHTML = "";
    for(let i=0; i<matR.length; ++i) {
        for(let j=0; j<matR[0].length; ++j) {
            aux3.innerHTML += pad(matR[i][j],3) + " ";
        }
        aux3.innerHTML += " <br> ";
    }
       aux3.innerHTML += " dim: " + matR.length + ", " + matR[0].length +
               " rwidth; " + player.width;
//    aux3.innerHTML = "<br> red: <br> " + matR + " <br> green: <br>" +
//            matG + " <br> blue: <br>" + matB + 
//            " <br> alpha: <br>" + matA;
    return [matR, matG, matB, matA];
    
}


function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}



function outputpixels(contxt, width=20, height=20) {
    let imgData = contxt.getImageData(0,0,width,height);
            aux2.innerHTML = " <br> Reds <br> ";
            //check out how to get the pixels at: https://www.w3schools.com/tags/canvas_getimagedata.asp
            for (i = 0; i < imgData.data.length; i += 4) {
//                aux2.innerHTML += imgData.data[i] + " ";
//                aux2.innerHTML += imgData.data[i+1] + " ";
//                aux2.innerHTML += imgData.data[i+2] + " ";
                aux2.innerHTML += imgData.data[i] + " ";
                if( (i+4) % (width*4) === 0) aux2.innerHTML += "<br>";
              }
              
               aux2.innerHTML += " <br> Green <br>";
            //check out how to get the pixels at: https://www.w3schools.com/tags/canvas_getimagedata.asp
            for (i = 0; i < imgData.data.length; i += 4) {
//                aux2.innerHTML += imgData.data[i] + " ";
//                aux2.innerHTML += imgData.data[i+1] + " ";
//                aux2.innerHTML += imgData.data[i+2] + " ";
                aux2.innerHTML += imgData.data[i+1] + " ";
                if( (i+4) % (width*4) === 0) aux2.innerHTML += "<br>";
              }
                aux2.innerHTML += " <br> Blue <br>";
            //check out how to get the pixels at: https://www.w3schools.com/tags/canvas_getimagedata.asp
            for (i = 0; i < imgData.data.length; i += 4) {
//                aux2.innerHTML += imgData.data[i] + " ";
//                aux2.innerHTML += imgData.data[i+1] + " ";
//                aux2.innerHTML += imgData.data[i+2] + " ";
                aux2.innerHTML += imgData.data[i+2] + " ";
                if( (i+4) % (width*4) === 0) aux2.innerHTML += "<br>";
              }
               aux2.innerHTML += " <br> Alpha <br>";
            //check out how to get the pixels at: https://www.w3schools.com/tags/canvas_getimagedata.asp
            for (i = 0; i < imgData.data.length; i += 4) {
//                aux2.innerHTML += imgData.data[i] + " ";
//                aux2.innerHTML += imgData.data[i+1] + " ";
//                aux2.innerHTML += imgData.data[i+2] + " ";
                aux2.innerHTML += imgData.data[i+3] + " ";
                if( (i+4) % (width*4) === 0) aux2.innerHTML += "<br>";
              }
}