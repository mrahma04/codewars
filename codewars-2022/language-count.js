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


function countLanguages2(list) {
    return list.reduce(function(acc, currEl) {

        if (currEl.language in acc) {
            acc[currEl.language]++
        } else {
            acc[currEl.language] = 1
        }

        return acc

    }, {})
}

console.log(countLanguages2(list1))

// adding properties to objects
// obj[propertyName] = value
// directly increment object property values using obj[propertyName]++