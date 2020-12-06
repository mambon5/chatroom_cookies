/* 
 * Entity Manager class
 */

class CentityManager {

    static fillArray() {//merging vchar and vobj int ventities
        ventities = vchar.concat(vobj);
    }

    static update() {
        ventities.forEach(entity => entity.move());  //we should do an update function on character, to generalize, for now we call draw
    }

    static draw() {
        CentityManager.sortfordraw();
        ventities.forEach(entity => entity.draw());
        bubble1.draw();
    }
    static sortfordraw() {//sort for printing on screen, lowest y first to print
        ventities.sort(function (a, b) { return a.y + a.height - b.y - b.height; });
    }
}