//Problem Statement - 12
/**
 * Write a function that finds all the factors of a given number.
 * Input: numbers, positive integer
 * Return: Is a number that divides the given number evenly or exactly, leaving no remainder
 * Example:
 * -- 4: 1, 2, 4
 * -- 14: 1, 2, 7, 14
 */

function findsAllFactors(number){
    if(isNaN(number) || number < 1) throw new Error('Error 403')
    let factors = []
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            factors.push(i)
        }
    }
    return factors
}


console.log("4!",findsAllFactors(4));
console.log("14!",findsAllFactors(14));
console.log("35!",findsAllFactors(35));
// console.log("35!",findsAllFactors("abd"));
// console.log("35!",findsAllFactors(0));