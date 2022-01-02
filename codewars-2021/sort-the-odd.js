const testArr = [5, 8, 6, 3, 4]
const testArr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

function sortArray(arr) {

    let odd = []
    let even = []

    for (const el of arr) {
        if (el % 2) {
            odd.push(el)
        }
    }

    for (const el of arr) {
        !(el % 2) ? even.push(el) : even.push("")
    }

    odd.sort((a, b) => {
        return a - b
    })

    let result = []
    for (i = 0, j = 0; i < arr.length; i += 1) {
        if (even[i] === '') {
            result.push(odd[j])
            j += 1
        } else {
            result.push(even[i])
        }
    }

    return result
}

console.log(sortArray(testArr))
console.log(sortArray(testArr2))