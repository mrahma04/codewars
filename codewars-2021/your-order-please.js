function order(words) {

    const numbers = Array(9)
    for (let i = 0; i < 9; i++) {
        let num = String.fromCharCode(49 + i)
        numbers[i] = num
    }

    for (const el of words.split('')) {
        numbers.includes(el)
    }   

    console.log(numbers)

}

order('hello')