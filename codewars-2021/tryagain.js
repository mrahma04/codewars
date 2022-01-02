function sumOfParts(num) {
    return num.split('').reduce((a, b) => Number(a) + Number(b))
}

function orderWeight(strng) {
    return strng
        .split(' ')
        .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
        .join(' ')
}

console.log(orderWeight('103 123 4444 99 2000'))