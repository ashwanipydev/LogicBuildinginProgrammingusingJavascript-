//Problem 8
/**
 * Write a functon that calculates and prints the sum of the digits of a given numbers?
 * Input: A number, positive integers -> 12,34, 123, 1234
 * Return: sum of all digits
 */

function sumOfAllDigits(digits){
    if(digits < 1) throw new Error(`plz Enter a positive number. You enter ${digits}`);
    let sumDigits = digits.toString().split('')
    let sumOfDigArr = 0
    sumDigits.forEach(num =>{
        sumOfDigArr += parseInt(num)
    })
    return sumOfDigArr
}


function sumOfAllDigits2(digits){
    if(digits < 1) throw new Error(`plz Enter a positive number. You enter ${digits}`);
    let sumDigits = digits.toString().split('')
    let sumOfDigArr = 0
    for(let i = 0; i < sumDigits.length; i++){
        sumOfDigArr += parseInt(sumDigits[i])
    }
    return sumOfDigArr
}

console.log(sumOfAllDigits2(12));
console.log(sumOfAllDigits2(22));
console.log(sumOfAllDigits2(-22));

// console.log(sumOfAllDigits(12))
// console.log(sumOfAllDigits(-12))
// console.log(sumOfAllDigits(23))
// console.log(sumOfAllDigits(34))
// console.log(sumOfAllDigits(45))