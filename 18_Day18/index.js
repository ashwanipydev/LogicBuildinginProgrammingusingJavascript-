//? Problem Statement
/**
 * *Write a promgram that swap two numbers?
 * *Input: Two numbers a & b
 * *Output: Interchange the values of a & b.
 * !Example
 * *a=5, b=6
 * *a=6, b=5
 */

function InterchangeNumber(a,b){
    let c = b //6
    b = a

    console.log(c,b);
}

function InterchangeNumber2(a,b){
    a = a + b 
    b = a - b
    a = a - b
    console.log(a,b);
}

InterchangeNumber2(5,6)
InterchangeNumber2(2,3)