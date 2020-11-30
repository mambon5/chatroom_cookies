/* 
 * Character Manager class
 */

var v = [];

class CcharacterManager {
    static add(obj) {
        v.push(obj);
    }
    
    static update() {
        v.forEach(character => character.move());  //we should do an update function on character, to generalize, for now we call draw
    }
    
    static draw() {
        CcharacterManager.sortfordraw();
        v.forEach(character => character.draw());
    }
    
    static sortfordraw() {//sort for printing on screen, lowest y first to print
        v.sort(function(a,b){return a.y+a.height-b.y-b.height;});        
    }
}