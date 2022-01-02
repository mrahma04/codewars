var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

// currValue is the current element that the reduce function is iterating over
function getCount(arr, lang) {
    return arr.reduce((acc, currValue) => {
        return currValue.language === lang ? acc + 1 : acc
    }, 0)
}

function countLanguages(list) {
    let langSet = new Set(list.map((el) => el.language))

    let emptyObj = {}
    for (const lang of langSet) {
        emptyObj[lang] = getCount(list, lang)
    }

    return emptyObj
}


console.log(countLanguages(list1))