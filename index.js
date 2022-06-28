// const numbers = [2, 6, 5, 23, 58, 65, 42]
// let n = numbers[0];

// for (const number of numbers) {
//     if (number < numbers){
//         n = number
//     }
// }
// console.log(n);

const phrase = 'JavaScript'
const array = phrase.split('')
let invertedString = ''

for (const leter of array) {
    invertedString += leter === leter.toLocaleLowerCase() ? leter.toLocaleUpperCase() : leter.toLocaleLowerCase()
}

console.log(invertedString);