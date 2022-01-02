// const role = 'host'
// const person = 'Jools Holland'

// const team = {}

// team[role] = person

// console.log(team)

function addProp(obj, k, v) {

    return { ...obj, [k]: v }

}

let x = {
    fName: "Mohammad",
    lName: "Rahman"
}

console.log(addProp(x, "phone", "555-555-5555"))