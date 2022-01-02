function shortcut(string) {
    let re = /[aeiou]/g
    return string.replace(re, '')
}

console.log(shortcut('hello world'))