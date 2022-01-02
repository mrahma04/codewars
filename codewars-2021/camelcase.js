String.prototype.camelCase = function () {
    var strArr = this.split(' ')
    var newStrArr = strArr.map(word => word.charAt(0).toUpperCase() + word.substring(1))

    return newStrArr.join("")
}

console.log("camel case method".camelCase())
