class Cobject extends Centity {
     constructor(x, y, width, height, scale, speed, margins, name="") {
        super(x, y, width*scale, height*scale, speed, margins, name);
         this._pastdir = -1;
         this._clase = "obj";
    }


    move() {

    }
   
    draw() {
        let x  = this.x - player.x + player.x_init;
        let y  = this.y - player.y + player.y_init;
        ctx.drawImage(this.animation.animationSheet.image, this.animation.currentFrame*this.animation.animationSheet.frameWidth, this.animation.animation*this.animation.animationSheet.frameHeight, this.animation.animationSheet.frameWidth, this.animation.animationSheet.frameHeight, x, y, this.width, this.height);
    }
}
