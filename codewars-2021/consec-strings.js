function longestConsec(strarr, k) {
    // your code

    let emptyArr = []

    if (k <= 0 | k > strarr.length) {
        return ""
    } else if (k === 1) {
        let longest = strarr.reduce((a, b) => {
            return a.length > b.length ? a : b
        })
        return longest
    } else {
        for (let i = 0; i < strarr.length; i++) {
            emptyArr.push(strarr.slice(i, i + k).join(''))
        }
        let joinedWordLengths = []
        for (const el of emptyArr) {
            let obj1 = {
                joinedWord: el,
                length: el.length
            }
            joinedWordLengths.push(obj1)
        }

        joinedWordLengths.sort((a, b) => {
            return b.length - a.length
        })

        return joinedWordLengths[0].joinedWord
    }
}

let arr1 = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))
console.log(longestConsec([], 3))
console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15))
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0))