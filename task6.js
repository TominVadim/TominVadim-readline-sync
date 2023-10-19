const distance = 131;
const speed = 68;
const calculateTime = (distance, speed) => {
    const time = distance / speed;
    const hours = Math.floor(time);
    const minutes = Math.floor((time * 60) - 60);



    return `${hours}ч ${minutes}м`;

};

console.log(calculateTime(distance, speed));