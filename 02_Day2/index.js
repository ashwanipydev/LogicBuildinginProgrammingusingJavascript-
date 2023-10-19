//Problem statement-4 
/**
 * Write a function that tells if a given number is even or odd? formula is n % 2 === 0
 * Write a function that finds and prints the smallest number among three given number?
 */

function evenOrOdd(number){
    /***v1***/
    // if (number % 2 === 0){
    //     return 'even'
    // }else{
    //     return 'odd'
    // }

    return number % 2 === 0 ? "even" : "odd"
}

// console.log(evenOrOdd(36));
// console.log(evenOrOdd(-33));
// console.log(evenOrOdd(0));
// console.log(evenOrOdd(1));
// console.log(evenOrOdd(9));

const array = [2,3,4]
function findsSmallestNumber(array){
    // if(num1 < num2 && num1 < num3){
    //     return `${num1} is a smallest number`
    // }else if(num2 < num1 && num2 < num3){
    //     return `${num2} is a smallest number`
    // }else if(num3 < num1 && num3 < num2){
    //     return `${num3} is a smallest number`
    // }
    // return num1;

//   let smallestNunber = num1;
//     if(num2 < smallestNunber){
//          smallestNunber = num2
//     }else if(num3 < smallestNunber){
//         smallestNunber = num3
//     }
//     return smallestNunber;  

    const sortArray = array.sort((a,b)=> a-b)
    return `smallest number is ${sortArray[0]}`
}

// console.log("v2",findsSmallestNumber(100,2,30));
// console.log("v2",findsSmallestNumber(2,114,300));
// console.log("v2",findsSmallestNumber(20,100,3));
// console.log("v2",findsSmallestNumber(3,1,6));
// console.log("v2",findsSmallestNumber(-1,-6,9));
// console.log("v2",findsSmallestNumber(1,1,1));
// console.log("v2",findsSmallestNumber(3,3,3));


console.log('sort', findsSmallestNumber([2.3,4,6]));
console.log('sort', findsSmallestNumber([.3,1.4,6]));
console.log('sort', findsSmallestNumber([-2.3,-4,6]));
console.log('sort', findsSmallestNumber([6.3,4,6]));
console.log('sort', findsSmallestNumber([2,2,6]));

