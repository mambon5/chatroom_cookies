/* 
 * Character Manager class
 */

class CcharacterManager {
    static add(obj) {
        vchar.push(obj);
        console.log("push made to character vector of element: " + obj.name)
    }
    
    static delete(obj) {
        var index = vchar.findIndex(char => char.name === obj.name);
        console.log("player to delete: " + obj.name)
        if (index > -1) {
            console.log("vector de caracteres: ")
            console.log(vchar);
            console.log("character a eliminar:")
            console.log(vchar[index])
            console.log("character deletion index: " + index)
            vchar = vchar.splice(index, 1);
            
            console.log(vchar);
        }
        
    }
    
    static update() {
        vchar.forEach(character => character.move());  //we should do an update function on character, to generalize, for now we call draw
        
    }
    
    static draw() {
        CcharacterManager.sortfordraw();
        vchar.forEach(character => character.draw());
       
        
    }
    
    
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = CcharacterManager;
}