//! Program statement
/**
 * *Write a program that counts the occurrences of each character in a given string 
 * ?Input: A string
 * ?Output: Count of each character in the string
 */

function charCount(str){
    let removeSpaces = str.replace(/ /g,"").trim().toLowerCase()
    const charCount = {}
    for(const char of removeSpaces){
        if(!charCount[char]){
            charCount[char] = 0
        }
        charCount[char] = charCount[char] + 1
    }
    return charCount
}



// console.log(charCount("Ankit Pandey"));



function charCountReduse(str){
    const inputStr = str.toLowerCase().split('')
    const result = inputStr.reduce((acc, char)=>{
        if(!acc[char]){
            acc[char] = 0
        }
        acc[char] = acc[char] + 1
        return acc
    },{})
    return result
}

console.log(charCountReduse("Ankkiit pandey"))