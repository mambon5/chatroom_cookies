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
//    let matR = [];
//    for(var w=0; w<9; w++) {
//        matR[w] = [];
//    }
    for (w = 0; w < imgData.data.length; w += 4) {
        matR[i][j] = imgData.data[w];
        ++i;
    if( (w+4) % (width*4) === 0) {
        i=0;
        ++j;
    }
    }
   matR[0][0] = 1;
    aux3.innerHTML = "hola: " + matR;
    return matR;
    
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