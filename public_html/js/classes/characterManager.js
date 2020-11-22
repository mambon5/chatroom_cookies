/* 
 * Character Manager class
 */

var v = [];

class CcharacterManager {
    static add(obj) {
        v.push(obj);
    }
    
    static update() {
        v.forEach(character => character.move());
    }
    
    static draw() {
        v.forEach(character => character.draw());
    }
}