function orderWeight(strng) {
    let strngArr = strng.split(' ')
    let emptyArr = []

    for (weight of strngArr) {
       let x = weight.split('').map(letter => parseInt(letter))
       let y = x.reduce((val1, val2) => (val1 + val2))
        emptyArr.push(y)
    }
    console.log(strngArr)
    console.log(emptyArr)

    let emptyObj = { }

    strngArr.forEach((k, v) => {emptyObj[k] = emptyArr[v]})
    console.log(emptyObj)

    var arr2 = []

}

orderWeight('103 123 4444 99 2000')