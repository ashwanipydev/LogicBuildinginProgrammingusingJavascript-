//Problem Statement - 6;
/**
 * Write a function that calculate factorial of a given number?
 * Input: A number, positive integer ->  0, 1, 4, 7
 * Factorial: Multiplication of all positive integrs from 1 to a given number;
 */

function calFactorial(num){
    console.log(typeof(num));
    if(typeof num !== 'number' || num < 0){
        throw new Error(`Input number should be greater than or equal to zeero and also not string's`)
    }
    let factorialnum = 1;
    for(let i = 1; i <= num; i++){
        factorialnum = factorialnum * i
        //  1 * 1 = 1
        //  1 * 2 = 2
        //  2 * 3 = 6
     }
     return factorialnum
}

function calculateFactorialUsingRecursion(num){
    console.log(num);
    if(typeof num !== 'number' || num < 0){
        throw new Error(`Input number should be greater than or equal to zeero and also not string's`)
    }
    if(num === 0 || num < 1){
        return 1
    }

    return num * calculateFactorialUsingRecursion(num - 1)
}


console.log('4!: ',calculateFactorialUsingRecursion(4));
console.log("3!: ",calculateFactorialUsingRecursion(3));
console.log("10!: ",calculateFactorialUsingRecursion(10));
console.log("0!: ",calculateFactorialUsingRecursion(0));
// console.log("-1!: ",calculateFactorialUsingRecursion(-1));
// console.log("ANkit!: ",calculateFactorialUsingRecursion("ankit"));







// console.log('4!: ',calFactorial(4));
// console.log("3!: ",calFactorial(3));
// console.log("10!: ",calFactorial(10));
// console.log("0!: ",calFactorial(0));
// // console.log("-1!: ",calFactorial(-1));
// // console.log("ANkit!: ",calFactorial("ankit"));
