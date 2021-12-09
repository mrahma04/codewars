function getCount(arr, val) {
    return arr.reduce((acc, curEl) => {
        return curEl === val ? acc + 1 : acc
    }, 0)
}

function highestRank(arr) {
    let setFromArr = new Set(arr)
    let emptyArr = []
    for (const el of setFromArr) {
        let obj = {
            value: el,
            count: getCount(arr, el)
        }
        emptyArr.push(obj)
    }
    emptyArr.sort((a, b) => {
        return b.count - a.count
    })
    return emptyArr
}

const testArr = [12, 10, 8, 12, 7, 6, 4, 10, 12]

console.log(getCount(testArr, 10))
console.log((highestRank(testArr)))