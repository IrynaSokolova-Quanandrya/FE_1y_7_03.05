// array.method(callback[currentValue, index, array])

const array = [3, 1, 5, 4, 9, 6, 2, 5, 8, 6];


// array.forEach((num, idx, array) =>{
//   const result = num * 2
// console.log(result) 
//     return result
// }     
//     );

    // console.log(array);
    
//    console.log(array.map( num => num + 2)); 

//     const users = [
//      { name: 'Mango', isActive: true, age: 32 },
//     { name: 'Poly', isActive: false, age:24},
//     { name: 'Ajax', isActive: true, age:18},
//     { name: 'Ira', isActive: false, age:10},
//     { name: 'Vania', isActive: true, age:9},
//   ];

//   console.log(users);

//   console.log(users.map(el=> {
//     if(el.isActive === true){
//         return el
//     } 
// }));

// console.log(array.filter(num => num>2));

// console.log(array.find(num => num>2));

// console.log(array.every(num => num>=1));
// console.log(array.some(num => num === 8));

// console.log(array.sort())


// console.log(array.sort((min, max) => max - min));

// console.log(users.map(user=>user.age)
// .filter(age=> age >= 18)
// .sort());

// array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)

// console.log(
//     array.reduce((acc, item)=>{
//     console.log(acc + item );
//     return acc + item

//     }, 0));
const arr = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
]

function getByBorn(arr) {
    return arr.filter(person=>{
        if(person.born >= 1800 && person.born < 1900)
        return person.born
    })
}
console.log(getByBorn(arr));