function numToArr(num) {
    let str = num.toString().split('')
    return str.map((el) => {
        if (el === '-') {
            return el
        }
        return parseInt(el)
    })
}

// console.log(numToArr(23))
// console.log(numToArr(-23))

function dashatize(num) {
    let arr = numToArr(num)

    return arr.map((el, index) => {
        if (el % 2 && index !== 0 && index !== -1 ) {
            return '-' + el + '-'
        } else {
            return el
        }
    }).join('')
}

console.log(dashatize(123))

// if (el % 2) is odd

// console.log((-17).toString().split(''))