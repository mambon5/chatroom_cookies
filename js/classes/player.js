/*
 * Player class
 */

if (typeof module !== "undefined" && module.exports) {
    Ccharacter = require("./character");
}

class Cplayer extends Ccharacter {
    constructor(x, y, width, height, scale, speed, margins, name="hero", clase="char") {
        super(x, y, width, height, scale, speed, margins, name, clase);
        
    }
    
    click() {
        var target = whoHit(this);
        if(mouse.click && target != "none") {
            switch(target.clase) {
                case "barril candy":
                    
            
            }
        }
    }
    

    move() {
        let dir = 0;
        this.moving = false;
        if( (keys[38] || keys[87])  ){//up
            this.animation = this.animations[3];
            dir=1;
        }
        if( (keys[40] || keys[83])   ){//down
            this.animation = this.animations[0];
            dir=5;
        }
        if( (keys[37] || keys[65]) ){//left
            this.animation = this.animations[1];
            if(dir === 1) dir=8;
            else if(dir === 5) dir = 6;
            else dir = 7;
        }
        if( (keys[39] || keys[68]) ){//right
            this.animation = this.animations[2];
            if(dir === 1) dir=2;
            else if(dir === 5) dir = 4;
            else dir = 3;
        }
       if(document.activeElement.id !== "message-input") { //chat is not selected, can move
            if(dir !== 0 ){ //dir is 0 and chat not selected
              let xoc = super.choque(dir);
              if(xoc === "null" && !this.moving) {

                  //suggest move to server.
                  this.moving = true;
    //              super.apuramove(dir);
              }
              else if(this === bubble1.host && xoc.clase==="char") {
                  //give away bubble, also send this info to server.
    //              bubtake = Date.now();              
    //              bubble1.host = xoc;
    //              aux3.innerHTML = xoc.clase;

              }
             else aux2.innerHTML = xoc.clase;
              this.animation.animating = true;
            } else{
                this.moving = false;
              this.animation.animating = false;
            }
            socket.emit("player movement", roomName, dir);
            this.animation.animate();
        }
    }

    draw() {
        ctx.drawImage(this.animation.animationSheet.image, this.animation.currentFrame*this.animation.animationSheet.frameWidth, this.animation.animation*this.animation.animationSheet.frameHeight, this.animation.animationSheet.frameWidth, this.animation.animationSheet.frameHeight, this.x_init, this.y_init, this.width*this.scale, this.height*this.scale);
    }
};


if (typeof module !== "undefined" && module.exports) {
    module.exports = Cplayer;
}