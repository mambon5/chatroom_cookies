class Cobject extends Ccharacter {
     constructor(x, y, callback_x_cent, callback_y_cent, width, height, scale=1, speed, margins, name="", clase="obj") {
        super(x, y, width, height, scale, speed, margins, name);
        this._callback_x_cent = callback_x_cent;
        this._callback_y_cent = callback_y_cent;
        this._pastdir = -1;
    }

    get x_cent() {return this._callback_x_cent;}
    get y_cent() {return this._callback_y_cent;}


   move() {
       
   }
   
   draw() {
        ctx.drawImage(this.animation.animationSheet.image, this.animation.currentFrame*this.animation.animationSheet.frameWidth, this.animation.animation*this.animation.animationSheet.frameHeight, this.animation.animationSheet.frameWidth, this.animation.animationSheet.frameHeight, this.x_cent(), this.y_cent(), this.width, this.height);
    }
}
