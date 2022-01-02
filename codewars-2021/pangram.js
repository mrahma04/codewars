function isPangram(string) {

    const alphabet = new Array(26)
    for (i = 0; i < 26; i++) {
        var char = String.fromCharCode(i + 97)
        alphabet[i] = char
    }

    var cleanString = string.toLowerCase().split('').filter(element => alphabet.includes(element))
    var stringSet = new Set(cleanString)
    var strippedStringArr = Array.from(stringSet)

    return alphabet.every(element => strippedStringArr.includes(element))
}

console.log(isPangram("hello"))
console.log((isPangram("The quick brown fox jumps over the lazy dog.")))