/* 
 * Character Manager class
 */

class CcharacterManager {
    static add(obj) {
        vchar.push(obj);
        console.log("push made to character vector " + vchar[0].name);
    }
    
    static update() {
        vchar.forEach(character => character.move());  //we should do an update function on character, to generalize, for now we call draw
        
    }
    
    //get player positions for each player
    
    
    static draw() {
        CcharacterManager.sortfordraw();
        vchar.forEach(character => character.draw());
       
        
    }
    
    static sortfordraw() {//sort for printing on screen, lowest y first to print
        vchar.sort(function(a,b){return a.y+a.height-b.y-b.height;});        
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = CcharacterManager;
}