const sentence = 'This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments.';

const countWords = (sentence) => {
    words = sentence.split(' ');
    return words.length;

};

console.log(countWords(sentence));
