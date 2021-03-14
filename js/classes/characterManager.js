/* 
 * Character Manager class
 */

class CcharacterManager {
    static add(obj) {
        vchar.push(obj);
    }
    
    static update() {
        vchar.forEach(character => character.move());  //we should do an update function on character, to generalize, for now we call draw
        
    }
    
    static draw() {
        CcharacterManager.sortfordraw();
        vchar.forEach(character => character.draw());
       
        
    }
    
    static sortfordraw() {//sort for printing on screen, lowest y first to print
        vchar.sort(function(a,b){return a.y+a.height-b.y-b.height;});        
    }
}