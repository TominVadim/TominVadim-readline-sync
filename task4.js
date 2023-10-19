const width = 45;
const height = 30;
const calculateRetangleProperties = (width, height) => {
    const S = width * height;
    const P = (width + height) * 2;
    return `S=${S} P=${P}`;
};

console.log(calculateRetangleProperties(width, height));