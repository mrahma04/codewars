let testArr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]
let testSet = new Set(testArr)

// console.log(testSet)

function getCount(arr, val) {

    // reduce method will return EXACTLY one value
    return arr.reduce((acc, el) => {

        // if query 'val' equals the current element, then add 1 to acc, else return acc
        // which has a default value of 0
        return (val === el ? acc + 1 : acc)
    }, 0)
}

function findOdd(A) {
    let testSet = new Set(A)
    let emptyArr = []
    for (let el of testSet) {
        let obj = {
            num: el,
            count: getCount(A, el)
        }
        emptyArr.push(obj)
    }

    for (const el of emptyArr) {
        if (el.count % 2 !== 0) {
            return (el.num)
        }
    }

}

console.log(findOdd(testArr))


// console.log(emptyArr)

