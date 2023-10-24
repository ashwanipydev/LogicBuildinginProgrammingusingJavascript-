//Problem Statement - 8
/**
 * Write a function that finds and prints the maximum element in an array of numbers?
 * Input: Array of numbers
 * Return: Biggest number;
 */

function sortWithoutSort(array){
    let bigNum = array[0]
    for(let i = 1; i <= array.length; i++){
        if(array[i] > bigNum){
            bigNum = array[i]
        }
    }
    return bigNum
}

console.log(sortWithoutSort([1,2,3,4,5]))
console.log(sortWithoutSort([1,2,3,4,5,66,90]))
console.log(sortWithoutSort([100,2,3,4,5,66,90]))