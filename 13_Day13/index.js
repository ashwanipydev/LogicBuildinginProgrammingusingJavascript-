//Problem Statements - 13
/**
 * Write a function that calculates and returns the average of a set of number.
 * Input: Array of  positive integer numbers
 * Return: Average of numbers
 */

function averageOfArr(array){
    let sum = 0
    for (const item of array) {
        sum += item
    }
    let avgOfArr = sum / array.length
    return avgOfArr.toFixed(2)
}

console.log("[1,2,4]",averageOfArr([1,2,4]));
console.log("[1 ,2 ,7 ,14]",averageOfArr([1 ,2 ,7 ,14]));
console.log("[1 ,5 ,7 ,35]",averageOfArr([1 ,5 ,7 ,35]));
// console.log("[1 ,5 ,7 ,35]",averageOfArr([1 ,5 ,7 ,-35]));