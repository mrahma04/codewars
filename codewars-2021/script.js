// var noName = []
// var oneName = ["Peter"]
// var twoNames = ["Jacob", "Alex"]
// var threeNames = ["Max", "John", "Mark"]
// var fourNames = ["Alex", "Jacob", "Mark", "Max"]
// var fiveNames = ["Alex", "Jacob", "Mark", "Max", "John"]


// function likes(names) {
//     if (names.length === 0) {
//         return output = 'no one likes this'
//     } else if (names.length === 1) {
//         return output = names[0] + ' likes this'
//     } else if (names.length === 2) {
//         return output = names[0] + ' and ' + names[1] + ' like this'
//     } else if (names.length === 3) {
//         return output = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
//     } else if (names.length >= 4) {
//         var newLength = names.length - 2
//         return output = names[0] + ', ' + names[1] + ' and ' + newLength + ' others like this'
//     }
// }

// console.log(likes(noName))
// console.log(likes(oneName))
// console.log(likes(twoNames))
// console.log(likes(threeNames))
// console.log(likes(fourNames))
// console.log(likes(fiveNames))

// function getCount(str) {
//     var vowelsCount = 0;

//     const vowels = ['a', 'e', 'i', 'o', 'u']


//     for (const letter of str.toLowerCase()) {
//         if(vowels.includes(letter)) {
//             vowelsCount++
//         }
//     }

//     return vowelsCount;
//   }

// console.log(getCount('AOMDFHFAHSFHAJKLHFHiiiadfadsfads'))

// function toJadenCase(str) {
//     let words = str.split(" ")

//     let lower = []
//     let jaden = []

//     for (let i = 0; i < words.length; i++) {
//         lower.push((words[i].toLowerCase()))
//     }

//     for (let i = 0; i < lower.length; i++) {
//         var upperFirst = lower[i].charAt().toUpperCase() + lower[i].slice(1)
//         jaden.push(upperFirst)
//     }

//     return jaden.join(" ")
// }

// console.log(toJadenCase("dying is mainstream"))

// String.prototype.toJadenCase = function () { 
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   }

// var str = new String("hello There")
// console.log(str.toJadenCase)

// let space, star, tower = []

// space = 1
// star = 10
// tower = 'Hello'

// console.log(typeof(space))

// space = 500

// console.log(space + 100, typeof(tower))

// function towerBuilder(nFloors) {
//   let space, star, tower = []

//   for (let i = 1; i <= nFloors; i++) {
//     space = " ".repeat(nFloors - i)
//     star = "*".repeat((2 * i) - 1)
//     tower.push(`${space}${star}${space}`)
//   }
//   return tower
// }

// console.log(towerBuilder(7))

// function alphabetPosition(text) {
//   var textArr = text.split("")
//   console.log(textArr)
//   return text
// }

// console.log(alphabetPosition("hello there"))

function alphabetPosition(text) {
  let alphabet = new Array(26)

  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(97 + i)
    alphabet[i] = char
  }

  return text.split('').map(element =>
    alphabet.indexOf(element))
}



  console.log(alphabetPosition('hello there'))
