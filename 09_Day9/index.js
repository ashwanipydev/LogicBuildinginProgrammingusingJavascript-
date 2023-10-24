//Problem statament - 9

/**
 * Write a function that checks if a string is palindrome or not 
 * Input: A string
 * Return: Boolean, true if Palindrome and false if not palindrome
 * A palindrome is a word that reads the same backward or forward 
 * Example: 
 * -- Madam
 * -- level
 * -- abba
 */

function isPalindrome(str){
    let strToarr = str.split('')
    console.log(strToarr);
    if(strToarr[0] === strToarr[strToarr.length - 1] || strToarr[1] === strToarr[strToarr.length - 2] ){
        return true
    }
    return false
}

// console.log(isPalindrome('ankit'))
// console.log(isPalindrome('madam'))
// console.log(isPalindrome('level'))
// console.log(isPalindrome('abba'))


function isPalindrome1(str){
    for(let i = 0; i <= str.length / 2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false
        }
    }
    return true
}


console.log('Madam',isPalindrome1('madam'));
console.log("Ankit",isPalindrome1('ankit'));
console.log("Abba",isPalindrome1('abba'));
console.log("Level",isPalindrome1('level'));



