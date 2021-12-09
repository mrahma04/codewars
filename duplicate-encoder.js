function unique(str, char) {
    return str.toLowerCase().indexOf(char) === str.toLowerCase().lastIndexOf(char)
}

function duplicateEncode(str) {
    let newArr = str.toLowerCase().split('')
    console.log(newArr)
    let emptyArr = []
    for (const el of newArr) {
        if (unique(str, el) === true) {
            emptyArr.push('\(')
        } 
        if (unique(str, el) === false) {
            emptyArr.push('\)')
        }
    }
    return emptyArr.join('')
}

console.log(unique('HQQ', 'H'))
console.log(duplicateEncode('HQQ'))
console.log(duplicateEncode('recede'))