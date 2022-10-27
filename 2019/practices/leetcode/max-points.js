/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let res = 1;
    for (let i = 0; i < points.length - 1; i++) {
        let linesCrossI = { 'dup': 1, 'vertical': 0, 'horizontal': 0 };
        let maxNumberOfPoints = 0;
        let x1 = points[i][0];
        let y1 = points[i][1];
        for (let j = i + 1; j < points.length; j++) {
            let x2 = points[j][0];
            let y2 = points[j][1];
            if (x1 == x2 && y1 == y2) {
                linesCrossI['dup']++;
            } else if (x1 == x2) {
                linesCrossI['vertical']++;
                maxNumberOfPoints = Math.max(maxNumberOfPoints, linesCrossI['vertical']);
            } else if (y1 == y2) {
                linesCrossI['horizontal']++;
                maxNumberOfPoints = Math.max(maxNumberOfPoints, linesCrossI['horizontal']);
            } else {
                let slope = (y2 - y1) * 100 / (x2 - x1);
                if (!linesCrossI[slope + '']) {
                    linesCrossI[slope + ''] = 0;
                }
                linesCrossI[slope]++;
                maxNumberOfPoints = Math.max(maxNumberOfPoints, linesCrossI[slope]);
            }
        }
        res = Math.max(res, maxNumberOfPoints + linesCrossI['dup']);
    }
    return res;
};