/* 
 * Object Manager class
 */

class CobjectManager {
    static add(obj) {
        vobj.push(obj);
    }

    static update() {
        vobj.forEach(object => object.move());  //we should do an update function on object, to generalize, for now we call draw
    }

    static draw() {
        CobjectManager.sortfordraw();
       
        vobj.forEach(object => object.draw());
       

    }

    static sortfordraw() {//sort for printing on screen, lowest y first to print
        vobj.sort(function (a, b) { return a.y + a.height - b.y - b.height; });
    }

    static generateValidPoses() {
        vobj.forEach(CobjectManager.generateValidPos);
    }

    static generateValidPos(item, index) {
       item.generateValidPos();
        
        console.log(item.name);
    }
}


if (typeof module !== "undefined" && module.exports) {
    module.exports = CobjectManager;
}