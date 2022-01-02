function orderWeight(strng) {
    return strng
}

orderWeight('111 110')

let a = '123'

let b = a.split('').map(el => parseInt(el))

let arr1 = ['111', '123']

function reducer(x, y) {
    return x + y
}

let emptyArr = []

for (el of arr1) {
    let x = el.split('').map(x => parseInt(x))
    let y = x.reduce(reducer)
    emptyArr.push(y)
    console.log(y)
}

console.log(emptyArr.join(' '))