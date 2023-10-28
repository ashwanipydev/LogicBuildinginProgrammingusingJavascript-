//? Problem statement - Fizz Buzz
/**
 * *Write a program that prints prints numbers from 1 to N replacing
 *  ?multiples of 3 with "Fizz"
 *  ?multiples of 5 with "Buzz"
 *  ?multiples of 3 with "FizzBuzz"
 */

function fizzBuzz(num){
    const fizzBuzz = []
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            fizzBuzz.push("fizzBuzz")
        }else if(i % 5 === 0){
            fizzBuzz.push("buzz")
        }else if(i % 3 === 0){
            fizzBuzz.push("fizz")
        }else{
            fizzBuzz.push(i)
        }
    }
    return fizzBuzz
}

console.log(fizzBuzz(30))