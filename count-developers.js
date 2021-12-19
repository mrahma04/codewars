var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function countDevelopers(list) {
    let count = 0;

    list.forEach((el) => {
        if (el.continent === 'Europe' && el.language === 'JavaScript') {
            count++
        }
    })
    return count
}

function greetDevelopers(list) {

    return list.map((el) => {
        return ({ ...el, greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?` })
    })

}

console.log(greetDevelopers(list1))