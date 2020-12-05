class Cbubble extends Cobject {
     constructor(x, y, callback_x_cent, callback_y_cent, width, height, scale=1, speed, margins, name="", host=player) {
        super(x, y, callback_x_cent, callback_y_cent, width, height, scale, speed, margins, name);
        this._host = host; //host is the character que la pilla.
    }
    get host(){return this._host;}
    
    set host(e){this._host = e; }

    move() {
        this.x =  this._host.x - player.x + player.x_init + this._host.width/2 - this.width/2;
        this.y = this._host.y - player.y + player.y_init - this.width;
   }
   
   draw() {
        this.animation.animate();
        super.draw();
    }
}
   



