//!  Problem statement
/**
 * *Write a function that calculates and prints the simple interest on a loan amount.
 * *Input:
 * ------ Principal amount
 * ------ Interest rate(yearly)
 * ------ Time duration (how many years)
 * *Return: Interest Amount
 * *Simple interest:
 * * (Principal * Interest Rate * Time Duration) / 100
 */

function calculatesSimpleInterest(pa, ir, td){
    let si = 0
    if(pa > 1 && ir > 1 && td >= 1){
        si = (pa * ir * td)/100
    }else{
        throw new Error('Erron 401')
    }
    return si.toFixed(2)
}


console.log(calculatesSimpleInterest(1000.50,5.75,1.5));
console.log(calculatesSimpleInterest(20000.33,10,5));


