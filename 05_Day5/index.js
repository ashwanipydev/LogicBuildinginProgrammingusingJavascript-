//Problem 5;
/**
 * Write a function that tells if provided year is a leep year or not?
 * 
 */

function isLeepYear(year){
    if((year % 4 === 0 && year % 100 !== 0)|| (year % 400 === 0)){
        return true
    }
    return false
}

console.log("1900",isLeepYear(1900));
console.log("2000",isLeepYear(2000));
console.log("2023",isLeepYear(2023));
console.log("2024",isLeepYear(2023));
console.log("1948",isLeepYear(1948));
console.log("1993",isLeepYear(1993));
console.log("1977",isLeepYear(1977));
console.log("1876",isLeepYear(1876));