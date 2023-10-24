//Problem statement-10
/**
 * Write a function that returns the result of raising a given number to a specified power?
 * Input: Two numbers
 * --Base
 * --Exponent
 * Return: Base to the power of exponent
 */

function powerOf(base, exponent){
    let result = 1
    for(let i = 1; i <= exponent; i++){
         result *= base
    }
    return result
}

console.log(powerOf(5,4));