// Problem statement - 11
/**
 * Write a function that counts and prints the number of vowels and consonants in a given string?
 * Input: String 
 * Return: Vowel and Consonant count 
 * Vowel: a e i o u
 * Consonant: All other character
 */

// function findVowelAndConsonant(strings){
//     let vowels = 0
    
//     let strToArr = strings.toLowerCase().split('')
//     for (const char of strToArr) {
//         if (char === "a"){
//             vowels++
//         }else if(char === "e"){
//             vowels++
//         }else if(char === 'i'){
//             vowels++
//         }else if(char === 'o'){
//             vowels++
//         }else if(char === 'u'){
//             vowels++
//         }
//     }
//     let consonants = (strToArr.length - vowels) - 1
//     return `${vowels} Vowels & ${consonants} Consonants`
// }

function findVowelAndConsonant(strings){
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let spaceremoved = strings.replace(/ /g,'')
    let inputStr = spaceremoved.toLowerCase()
    console.log(inputStr);
    let vowelsCount = 0
    let consonantsCount = 0
    for (const char of inputStr) {
        if(vowels.includes(char)){
            vowelsCount++
        }else if(/^[a-z]$/.test(char)){
            consonantsCount++
        }
    }
    return `${vowelsCount} Vowels, ${consonantsCount} Consonant`
}



console.log(findVowelAndConsonant("Hello World"))
console.log(findVowelAndConsonant("Ashish Saluja "))
console.log(findVowelAndConsonant("Ashish Saluja Saluja"))
console.log(findVowelAndConsonant("Ankit Pandey 123"))