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
        v.forEach(character => character.draw());
    }
}