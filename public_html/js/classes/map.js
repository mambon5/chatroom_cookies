/* 
 * Map class
 */

class Cmap {
    constructor(rows, cols) {
        this._map_matrix = [
                [0,0,1,1,0,0,0,0,0,1,1],
                [1,1,1,1,1,1,0,0,0,1,0],
                [0,0,1,1,0,2,1,1,1,1,0],
                [0,1,1,1,0,0,1,0,0,1,0],
                [0,0,1,1,1,1,1,1,0,1,0],
                [0,0,1,1,0,0,0,1,1,1,0],
                [1,1,1,1,1,1,0,0,0,1,0],
                [0,0,1,1,0,1,2,0,0,1,0],
                [0,1,1,1,0,1,2,2,1,1,1],
                [0,1,1,1,1,0,1,1,1,1,1]
            ];
        this._v_rows = rows;
        this._v_cols = cols;
    }
    
    drawmatrix(canvW, canvH) {
        let f = this._map_matrix.length;
        let c = this._map_matrix[0].length;
        let resh = canvW/this._v_cols; //dependera solo del canvas
        let resv = canvH/this._v_rows;

        //image to use for pattern:
        var img1 = document.getElementById("wall");
//        var pat1 = ctx.createPattern(img1, "repeat");
        var img2 = document.getElementById("floor");
        var pat2 = ctx.createPattern(img2, "repeat");
        var img3 = document.getElementById("grass");
        var img4 = document.getElementById("tiles1");
        //
        
        let x = player.x_init - player.x;
        let y = player.y_init - player.y;

        for(let i=0; i<c; i++) {
            for(let j=0; j<f; j++) {
                if(this._map_matrix[j][i]===1)  {
//                    ctx.globalAlpha = 1;
//                    ctx.fillStyle = pat2;
                    ctx.drawImage(img4,i*resh+x,j*resv+y,resh,resv);
//                    ctx.fillRect(i*resh+x,j*resv+y,resh,resv);
//                    ctx.fillStyle = "black";
//                    ctx.globalAlpha = 1;
                }
                else if(this._map_matrix[j][i]===2){
                    ctx.drawImage(img4,i*resh+x,j*resv+y,resh,resv);
                } 
                else {
//                    ctx.globalAlpha = 1;
//                    ctx.fillStyle = pat1;
//                    ctx.fillRect(i*resh+x,j*resv+y,resh,resv);
                    ctx.drawImage(img1,i*resh+x,j*resv+y,resh,resv);
//                    ctx.fillStyle = "black";
//                    ctx.globalAlpha = 1;
//                    ctx.strokeRect(i*resh+x,j*resv+y,resh,resv);
                }
            }
        }
    }
    
    getresol(canvW, canvH){
        let resh = canvW/this._v_cols;
        let resv = canvH/this._v_rows;
        return [resh, resv];
    }
    
    getmatpos(x,y, canvW, canvH) {
        let resh = canvW/this._v_cols;
        let resv = canvH/this._v_rows;
        let pos2 = Math.floor(x/resh);
        let pos1 = Math.floor(y/resv);

        return [pos1,pos2];
    }
    
    validcorners(objx, objy, objw, objh, canvW, canvH) {
        return  this.validpos(objx, objy, canvW, canvH) &&
                this.validpos(objx + objw, objy, canvW, canvH) &&
                this.validpos(objx, objy + objh, canvW, canvH) &&
                this.validpos(objx + objw, objy + objh, canvW, canvH);
    }       

    validpos(objx, objy, canvW, canvH) {
        let f = this._map_matrix.length;
        let c = this._map_matrix[0].length;

        var pos = this.getmatpos(objx, objy, canvW, canvH);
        let pos1 = pos[0];
        let pos2 = pos[1];

        if(pos2 <0 || pos1 > f-1 || pos1<0 || pos2 > c-1) return 0;

        //aux1.innerHTML = "matrix pos: " + pos + "<br> valid move: " + this._map_matrix[pos1][pos2];
        return this._map_matrix[pos1][pos2];
    }
    
    generateValidPos(width, height) {
        let x = -1;
        let y = -1;
        while(!map.validcorners(x, y, width, height, canvas.width, canvas.height)) {
            x = Math.random() * canvas.width * this._v_cols;
            y = Math.random() * canvas.height * this._v_rows;
        }
        return [x, y];
    }
}
