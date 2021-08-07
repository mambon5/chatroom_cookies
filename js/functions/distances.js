/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function distl2(p1, p2) {
    let res = Math.sqrt( (p1[0]-p2[0])^2 + (p1[1]-p2[1])^2  );
    return res;
}

function distancel2(rect1, rect2) {//distance according to mathematical l2 norm (euclidean)
    //euclidean distance between two rectangles
    x1 = rect1.x
    x2 = rect2.x
    y1 = rect1.y
    y2 = rect2.y
    x1b = rect1.x + rect1.width*rect1.scale
    x2b = rect2.x + rect2.width*rect2.scale
    y1b = rect1.y + rect1.height*rect1.scale
    y2b = rect2.y + rect2.height*rect2.scale
    left = x2b < x1
    right = x1b < x2
    bottom = y2b < y1
    top = y1b < y2
    if (top && left)
        return distl2([x1, y1b], [x2b, y2])
    else if (left && bottom)
        return distl2([x1, y1], [x2b, y2b])
    else if (bottom && right)
        return distl2([x1b, y1], [x2, y2b])
    else if (right &&  top)
        return distl2([x1b, y1b], [x2, y2])
    else if (left)
        return x1 - x2b;
    else if (right)
        return x2 - x1b;
    else if (bottom)
        return y1 - y2b;
    else if (top)
        return y2 - y1b
    else {
        // rectangles intersect
        return 0
    }
   }
   
   
if (typeof module !== "undefined" && module.exports) {
    module.exports.distl2 = distl2;
    module.exports.distancel2 = distancel2;
}