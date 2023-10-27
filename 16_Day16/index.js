//? Problem statement
/**
 * *Write a function that counts and returns the number of words in a sentence?
 * *Input: A sentence
 * *Return: Number of words
 */


function countsWords(sentence){
    let countsSum = 0
    let sentenceArr = sentence.trim().split(" ").filter((element)=> element != '')
    countsSum = sentenceArr.length
    return `"${sentence}" words counts ${countsSum}`
}


console.log(countsWords("this is a sentence"))
console.log(countsWords("What is the date today"))
console.log(countsWords("What    is the    date today"))
console.log(countsWords("  What    is the    date today   "))