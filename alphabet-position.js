// Replace With Alphabet Position

function alphabetPosition(text) {

    // create an array of ASCII letter a - z
    const alphabet = new Array(26)

    for (i = 1; i <= 26; i++) {
        let char = String.fromCharCode(i + 96)
        alphabet[i] = char
    }

    let textArr = text.toLowerCase().split('').filter(element => alphabet.includes(element))

    return textArr.map(element => alphabet.indexOf(element)).join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
