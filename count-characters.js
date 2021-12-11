function getCount(str, letter) {
    return str.split('').reduce((acc, currValue) => {
        return currValue === letter ? acc + 1 : acc
    }, 0)
}

function count(str) {
    let newSet = new Set(str.split(''))
    let obj1 = {}
    for (let el of newSet) {
        obj1[el] = getCount(str, el)
    }
    return obj1
}

console.log(getCount('hello', 'l'))
console.log(count('hello'))