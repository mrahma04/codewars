const testStr = "Rome:Jan 81.2,Feb 63.2,Mar 70.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 117.7,Nov 111.0,Dec 97.9"

let strArr = testStr.split(":")
// console.log(strArr[0])

let data = strArr[1].split(",")

let month = /([a-z]{3})/gi
let rainfall = /(\d+\.?\d*)/g

let result = {}

for (let j = 0; j < strArr.length; j++) {
    result['City'] = strArr[j]
    j =+ 1
}

for (let i = 0; i < data.length; i++) {
    let k = data[i].match(month)
    let v = data[i].match(rainfall).toString()
    result[k] = v
}

console.log(result)