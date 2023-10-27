//? Problem statement
/**
 * *Write a function that tells if the given number is prime or not?
 * *Input: A number
 * *Return: true if prime and false if not prime
 * *Prime number: A number that can only be divided by itself and 1 without remainders
 */

function isPrimeNumber(num){
    let result = true
    for(let i = 2; i < num; i++){
        if(num % i === 0) result = false
        break
    }
    return result
}


function isPrimeNumber1(num){
    let result = true
    if(num === 2){
        result = true
    }else if(num % 2 === 0){
        result = false
    }

    if(result){
        for(let i = 3; i < num; i = i + 2){
            if(num % i === 0){
                result = false
                break
            }
    }}
    return result
}









console.log("4",isPrimeNumber(4));
console.log("10",isPrimeNumber(10));
console.log("5",isPrimeNumber(5));
console.log("7",isPrimeNumber(7));
console.log("2",isPrimeNumber(2));
console.log("46",isPrimeNumber(46));
console.log('isPrimeNumber1');
console.log("4",isPrimeNumber1(4));
console.log("10",isPrimeNumber1(10));
console.log("5",isPrimeNumber1(5));
console.log("7",isPrimeNumber1(7));
console.log("2",isPrimeNumber1(2));
console.log("46",isPrimeNumber1(46));