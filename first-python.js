var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

function getFirstPython(list) {
    let firstMatch = list.find((el) => el.language === 'Python')

    if (firstMatch !== undefined) {
        return `${firstMatch.firstName}, ${firstMatch.country}`
    } else {
        return 'There will be no Python developers'
    }
}

console.log(getFirstPython(list1))