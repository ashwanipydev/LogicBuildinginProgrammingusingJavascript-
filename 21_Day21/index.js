//Promblem statement - Number Pyramid 
/**
 * *Write a program that prints a number pyramid?
 * !Input: A positve number
 * !Output: Number Pyramid
 */

function numberPyramid(num){
    for(let col = 1; col <= num; col++){
        let lineContent = ''
        for(let row = col; row <= num; row++){
            lineContent = lineContent + " "
        }
        for(let count = 1; count <= col; count++){
            lineContent = lineContent + count
        }
        for(let reverseCount = col - 1; reverseCount>= 1; reverseCount--){
            lineContent = lineContent + reverseCount
        }
        console.log(lineContent);
    }
}

// numberPyramid(9)
