// Problem Statement -5
/**
 * Write a function that returns the reverse of a string;
 * --Input: A string;
 * --Return: reversed string 
 * 
 */


function resversStr(str){
    let reversString = ''
    let revStr = str.split('').reverse()
    for( const str of revStr){
        reversString += str
    }
    return reversString;
}

console.log(resversStr('Ashwani'));
console.log(resversStr('Ashish'));
console.log(resversStr('Software development'));
// console.log(resversStr(12345));