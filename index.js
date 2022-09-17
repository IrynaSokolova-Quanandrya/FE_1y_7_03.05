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
// 1. отримати масив вчених що народилися в 19 ст
// function getByBorn(arr){
//     return arr.filter(el=>{
//         if(el.born >= 1800 && el.born< 1900){
//             return el.born
//         }
//     })
// }
// console.log(getByBorn(arr));
// 2. знайти суму років скільки прожили всі вченні
// function getTotalAge(arr){
//     return arr.reduce((total, el)=>{
//         let age = el.dead - el.born
//         return total += age
//     }, 0)
// }
// console.log(getTotalAge(arr));
// 3. Відсортувати вчених по алфавіту
// function sortByName(arr) {
//     return arr.sort((a, b)=>{
//         return a.name.localeCompare(b.name)
//     })    
// }
// console.log(sortByName(arr));
// 4. Відсортувати вчених по кількості прожитих років
// function sortByAge(arr) {
//     return arr.reduce((total, el)=>{
//                 let age = el.dead - el.born
//                 total.push(age)
//                 return total
//             }, arr).sort()    
// }
// console.log(sortByAge(arr));
// 5. Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
// function removeByBorn(arr) {
//     return arr.reduce((res, el)=>{
//         if(el.born <=1400 || el.born > 1800){            
//             res.push(el)
//         }
//         return res
//     }, [])
// }
// console.log(removeByBorn(arr));
// 6. Знайти вченого який народився найпізніше.
// function getYoungest(arr) {
//     return arr.reduce((youngest, el)=>{
//     if(youngest.born  > el.born){
//         youngest
//     } 
//      return  youngest
       
// })
// }
// console.log(getYoungest(arr));
// 7. Знайти рік народження Albert Einstein

// 8. знайти вчених прізвище яких починається на літеру С
// function dfd(arr) {
//     return arr.filter(({surname})=>
//     surname.startsWith("C"))
// }
// console.log(dfd(arr));
// 9. Видалити з масива всіх вчених імя яких починається на A
// function dfd(arr) {
//         return arr.filter(({name})=>
//         !(name.startsWith("A")))
//     }
//     console.log(dfd(arr));
// 10. Знайти вченого який прожив найбільше і вченого який прожив найменьше
// 11. Знайти вчених в яких співпадають перші літери імені і прізвища
// 12. Дізнатися чи всі вченні працювали в 19 столітті
