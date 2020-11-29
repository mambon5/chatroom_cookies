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
        this._rows = this._map_matrix.length;
        this._cols = this._map_matrix[0].length;
        this._v_rows = rows;
        this._v_cols = cols;
        this._resh = canvas.width/this._v_cols;
        this._resv = canvas.height/this._v_rows;
    }
    
    drawmatrix() {
        //image to use for pattern:
        var img1 = document.getElementById("wall");
//        var pat1 = ctx.createPattern(img1, "repeat");
        var img2 = document.getElementById("floor");
        var pat2 = ctx.createPattern(img2, "repeat");
        var img3 = document.getElementById("grass");
        var img4 = document.getElementById("tiles1");
        
        let x = player.x_init - player.x;
        let y = player.y_init - player.y;

        for(let i = 0; i < this._cols; i++) {
            for(let j = 0; j < this._rows; j++) {
                switch(this._map_matrix[j][i]) {
                    case 0:
                        ctx.drawImage(img1,i*this._resh+x,j*this._resv+y,this._resh,this._resv);
                        break;
                    case 1:
                    case 2:
                        ctx.drawImage(img4,i*this._resh+x,j*this._resv+y,this._resh,this._resv);
                        break;
                }
            }
        }
    }
    
    getresol(){
        return [this._resh, this._resv];
    }
    
    getmatpos(x,y) {
        let pos2 = Math.floor(x/this._resh);
        let pos1 = Math.floor(y/this._resv);
        return [pos1,pos2];
    }
    
    validcorners(objx, objy, objw, objh) {
        return  this.validpos(objx, objy) &&
                this.validpos(objx + objw, objy) &&
                this.validpos(objx, objy + objh) &&
                this.validpos(objx + objw, objy + objh);
    }       

    validpos(objx, objy) {
        var pos = this.getmatpos(objx, objy);
        if(pos[1] < 0 || pos[0] > this._rows-1 || pos[0] < 0 || pos[1] > this._cols-1) return 0;
        return this._map_matrix[pos[0]][pos[1]];
    }
    
}
