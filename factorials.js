// https://stackoverflow.com/questions/2652536/reverse-factorial



function inverseFactorial(num) {
    let current = 1;
    let factorial = num;
    while (factorial > current) {
        if (factorial % current) {
            return -1; //not divisible
        }
        factorial /= current;
        current += 1;
    }
    if (current == factorial) {
        return current;
    }
    return -1;
}
inverseFactorial(120)





// 

// function reverseFactorial(num) {
//     let result = num;

// if (num === 0 || num === 1)
//     return 1;
//     while (num>1) {
//         num--;
//         result = result * num;
//     }
//     return result;
// }

// reverseFactorial(5)