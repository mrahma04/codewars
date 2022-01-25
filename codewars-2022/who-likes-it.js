function likes(names) {
    const length = names.length
    const others = length - 2
    switch (length) {
        case 0:
            return 'no one likes this'
            break;
        case 1:
            return `${names[0]} likes this`
            break;
        case 2:
            return `${names[0]} and ${names[1]} likes this`
            break;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} likes this`
            break;
        default:
            return `${names[0]}, ${names[1]} and ${others} others like this`
            break;
    }
}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))