const x1 = 3;
const y1 = 5;
const x2 = -2;
const y2 = -4;

const calculateDistance = (x1, y1, x2, y2) => {
    const d = Math.sqrt((Math.pow(x1 - x2, 2)) + Math.pow(y1 - y2, 2));
    return Math.abs(d);
};

console.log(calculateDistance(x1, y1, x2, y2));
