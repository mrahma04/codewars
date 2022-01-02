function orderWeight(strng) {

    // split string using 'space' delimiter
    let strngArr = strng.split(' ')

    let emptyArr = []
    for (weight of strngArr) {
        let x = weight.split('').map(letter => parseInt(letter))
        let y = x.reduce((val1, val2) => (val1 + val2))
        emptyArr.push(y)
    }

    let emptyArr2 = []

    for (let i = 0; i < strngArr.length; i++) {
        var obj1 = {
            originalWeight: strngArr[i],
            calculatedWeight: emptyArr[i]
        }
        emptyArr2.push(obj1)
    }

    emptyArr2.sort((a, b) => a.calculatedWeight - b.calculatedWeight || a.calculatedWeight > b.calculatedWeight || -(a.calculatedWeight < b.calculatedWeight))

    let finalReturn = []
    for (let i =0; i < emptyArr2.length; i++) {
        finalReturn.push(emptyArr2[i].originalWeight)
    }

    return finalReturn.join(' ')
}

console.log(orderWeight('103 123 4444 99 2000'))
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'))

// let testObj = [
//     { originalWeight: '11', calculatedWeight: 2 },
//     { originalWeight: '11', calculatedWeight: 2 },
//     { originalWeight: '2000', calculatedWeight: 2 },
//     { originalWeight: '22', calculatedWeight: 4 },
//     { originalWeight: '10003', calculatedWeight: 4 },
//     { originalWeight: '123', calculatedWeight: 6 },
//     { originalWeight: '1234000', calculatedWeight: 10 },
//     { originalWeight: '44444444', calculatedWeight: 32 },
//     { originalWeight: '9999', calculatedWeight: 36 }
//   ]

//   let testX = testObj[0].originalWeight
//   console.log(testX)

function sumOfParts(num) {
    return num.split('').reduce((a, b) => Number(a) + Number(b))
}

function orderWeight1(strng) {
    return strng
        .split(' ')
        .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
        .join(' ')
}

console.log(orderWeight1('103 123 4444 99 2000'))