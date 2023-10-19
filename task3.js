const price = 480;
const discountPersantage = 0.35;

const calculateDiscount = (price, discountPersantage) => {
    return price * discountPersantage;
};

console.log(calculateDiscount(price, discountPersantage));