//? Problem statement
/**
 * *Write a program that checks if a number is Armstrong or Not?
 * *Input: A Number
 * *Output: True if a  number is Armstrong and False if number is not a Armstrong
 * ? Armstrong: Its a number that is equal to the sum of its own digits raised to the    power of the number of digits
 */

function isArmstrong(num){
    let countlength = num.toString().split('')
    let result = []
    console.log(countlength);
    for(let i = 0; i < countlength.length; i++){
        result.push(Number(Math.pow(countlength[i], countlength.length)))
    }
    console.log( result, typeof result[0]);
    const initialValue = 0;
    const sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    console.log(sum);
    console.log((sum === num) ? true : false)
}

isArmstrong(153)
isArmstrong(1535)