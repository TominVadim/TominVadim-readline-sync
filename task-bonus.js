/* В качестве бонуса расчёт площади и периметра треугольника по 2-м сторонам. */ 
/* По невнимательности считал треугольник вместо прямоугольника. */ 
/* Код удалять жалко. Будет бонусом */ 

const width = 35;
const height = 20;
const calculateTriangleProperties = (width, height) => {
    const S =  0.5 *width * height;
    const P = Math.sqrt(Math.pow(width, 2) + Math.pow(height,2)) - 2 + 2 * width;
    return `S=${S} P=${P}`;
};

console.log(calculateTriangleProperties(width, height));
