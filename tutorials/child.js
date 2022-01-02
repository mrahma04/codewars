// not equals to function

function notEqualsTo(val1, val2) {
    return function(x) {
        return x != val1 || x!= val2 
    }
}

const twoNumbers = notEqualsTo(10, 20)

twoNumbers()