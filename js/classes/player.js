/*
 * Player class
 */

if (typeof module !== "undefined" && module.exports) {
    Ccharacter = require("./character");
}

class Cplayer extends Ccharacter {
       constructor(x, y, width, height, scale, speed, margins, name="hero", clase="char", dir = 0, love=200, bag = [], hand="empty",
    lover="", action="none",clicking=false, targetName ="none") {

        super(x, y, width, height, scale, speed, margins, name, clase);
        this._dir = dir;
        this._love = love;
        this._bag = bag;
        this._hand = hand;
        this._lover = lover;
        this._clicking = clicking;
        this._action = action;
        this._targetName = targetName;
    }

    get dir() {return this._dir;}
    get love() {return this._love;}
    get bag() {return this._bag;}
    get hand() {return this._hand;}
    get lover() {return this._lover;}
    get clicking() {return this._clicking;}
    get targetName() {return this._targetName;}
    get action() {return this._action;}

    set dir(e) {this._dir = e;}
    set love(e) {this._love = e;}
    set bag(e) {this._bag = e;}
    set hand(e) {this._hand = e;}
    set lover(e) {this._lover = e;}
    set clicking(e) {this._clicking = e;}
    set targetName(e) {this._targetName = e;}
    set action(e) {this._action = e;}
    
    openMenu(type) {
         let html ="";
         switch(type) {
            case "candy":
                html =  '<button id="eat" class="optionb">eat</button>'+
                        '<button id="take" class="optionb">take</button>';
                break;
            case "pet": //una mascota té les opcions de pet o slap!
                html =  '<button id="pet" class="optionb">pet</button>'+
                        '<button id="slap" class="optionb">slap</button>';
                break;
            case "close": //una mascota té les opcions de pet o slap!
                html =  '';
                break;
        }
         document.getElementById("optionMenu").innerHTML = html; 
    }
    
    checkClick() {
        
            var target = selobj.host;
            this._targetName = "none";
            if(target!="empty") this._targetName = target.name;
            this._clicking = mouse.click;
            if(mouse.click && target!="empty") {
                const dist = distancel2(target,this);
                switch(target.clase) {
                    case "barril candy":
                        if(dist==0 )  this.openMenu("candy");
                        break;
                    case "pet":
                        this.openMenu("pet");
                        break;
                        
                }
            } else if(mouse.click || this.dir != 0) this.openMenu("close");
            
            
        
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
            this.dir = dir
//            socket.emit("player movement", roomName, dir);
            this.animation.animate();
        }
    }

    draw() {
        canvas.ctx.drawImage(this.animation.animationSheet.image, this.animation.currentFrame*this.animation.animationSheet.frameWidth, this.animation.animation*this.animation.animationSheet.frameHeight, this.animation.animationSheet.frameWidth, this.animation.animationSheet.frameHeight, this.x_init, this.y_init, this.width*this.scale, this.height*this.scale);
        let text = Math.round(player.love/5)+"%";
        lovebar.style.width = text;
        lovebar.innerHTML = player.love
    }
};




if (typeof module !== "undefined" && module.exports) {
    module.exports = Cplayer;
}