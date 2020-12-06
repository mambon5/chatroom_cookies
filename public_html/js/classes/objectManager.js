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
        bubble1.draw();

    }

    static sortfordraw() {//sort for printing on screen, lowest y first to print
        vobj.sort(function (a, b) { return a.y + a.height - b.y - b.height; });
    }

    static generateValidPoses() {
        vobj.forEach(CobjectManager.generateValidPos);
    }

    static generateValidPos(item, index) {
        init_pos = item.generateValidPos();
        item.x = init_pos[0];
        item.y = init_pos[1];
        console.log(item.name);
    }
}