/* 
 * Map class
 */

class Cmap {
    constructor() {
        this._map_matrix = [
                [0,0,1,1,0,0,0],
                [1,1,1,1,1,1,0],
                [0,0,1,1,0,1,1],
                [0,1,1,1,0,0,1],
                [0,0,1,1,1,1,1]
            ];
    }
    
    drawmatrix(canvW, canvH) {
        let f = this._map_matrix.length;
        let c = this._map_matrix[0].length;
        let resh = canvW/c;
        let resv = canvH/f;

        let x = player.x_init - player.x;
        let y = player.y_init - player.y;

        for(let i=0; i<c; i++) {
            for(let j=0; j<f; j++) {
                if(this._map_matrix[j][i])  {
                    ctx.globalAlpha = 0.3;
                    ctx.fillStyle = "white";
                    ctx.fillRect(i*resh+x,j*resv+y,resh,resv);
                    ctx.fillStyle = "black";
                    ctx.globalAlpha = 1;
                }
                else {
                    ctx.globalAlpha = 0.2;
                    ctx.fillStyle = "IndianRed";
                    ctx.fillRect(i*resh+x,j*resv+y,resh,resv);
                    ctx.fillStyle = "black";
                    ctx.globalAlpha = 1;
                    ctx.strokeRect(i*resh+x,j*resv+y,resh,resv);
                }
            }
        }
    }
    
    getresol(canvW, canvH){
        let f = this._map_matrix.length;
        let c = this._map_matrix[0].length;
        let resh = canvW/c;
        let resv = canvH/f;
        return [resh, resv];
    }
    
    getmatpos(x,y, canvW, canvH) {
        let f = this._map_matrix.length;
        let c = this._map_matrix[0].length;
        let resh = canvW/c;
        let resv = canvH/f;
        let pos2 = Math.floor(x/resh);
        let pos1 = Math.floor(y/resv);

        return [pos1,pos2];
    }
    
    validcorners( objx, objy, objw, objh, canvW, canvH ) {
        return  this.validpos(objx, objy, canvW, canvH) &&
                this.validpos(objx + objw, objy, canvW, canvH) &&
                this.validpos(objx, objy + objh, canvW, canvH) &&
                this.validpos(objx + objw, objy + objh, canvW, canvH);
    }       

    validpos(objx, objy,canvW, canvH) {
        let f = this._map_matrix.length;
        let c = this._map_matrix[0].length;

        var pos = this.getmatpos(objx, objy, canvW, canvH);
        let pos1 = pos[0];
        let pos2 = pos[1];

        if(pos2 <0 || pos1 > f-1 || pos1<0 || pos2 > c-1) return 0;

        aux1.innerHTML = "matrix pos: " + pos + 
                "<br> valid move: " + this._map_matrix[pos1][pos2];
        return this._map_matrix[pos1][pos2];
    }
}