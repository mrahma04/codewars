function toCameCase(str) {
    if (str === '') {
        return ''
    } else {
        return str
            .replace(/([-_])([a-z])/gi, function (a) {
                return a[1].toUpperCase()
            })
    }

}

console.log(toCameCase("the_stealth_warrior"))
console.log(toCameCase("The-Stealth-Warrior"))
console.log(toCameCase("A-B-C"))

