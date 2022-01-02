// var list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

// function countDevelopers(list) {
//     let count = 0;

//     list.forEach((el) => {
//         if (el.continent === 'Europe' && el.language === 'JavaScript') {
//             count++
//         }
//     })
//     return count
// }

// function greetDevelopers(list) {

//     return list.map((el) => {
//         return ({ ...el, greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?` })
//     })

// }

// let firstList = [1, 2]
// let secondList = [...firstList, 3, 4]

// console.log(firstList, secondList)

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'Ruby' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function isRubyComing(list) {
    return list.find(({ language }) => language === 'Ruby')
}
isRubyComing(list1)