//javaScript-logic-building
/**
 * Write a program that printes "Hello World" on the console
 * Write  a function that takes two numbers as input and prints their sum Input: Two numbers a&b
 * Write a Function That calculates and prints the area of a rectangle given its lenght and width  
 * --Area of a rectangle = length * width
 */


function sayHello(){
    return 'Hello World'
}

// console.log(sayHello());


function addTwoNumbers(a,b){
    if(isNaN(a) || isNaN(b)){
        return `plz enter a valid number your numbers is A: ${typeof a} and B: ${typeof b}`
    }
    return `the sum of two numbers ${a} and ${b} is ${a+b}`
}

// console.log(addTwoNumbers(3,4));
// console.log(addTwoNumbers(4));
// console.log(addTwoNumbers(0,-22222));
// console.log(addTwoNumbers(0,0));
// console.log(addTwoNumbers(3.0,5.0));
// console.log(addTwoNumbers(3.8,5.3));


function areaOfRectagle(length, width){
    if( length <= 0){
        throw new RangeError(`Length should be a positive number`)
    }else if(width <= 0){
        throw new RangeError(`Width should be a positive number`)
    }
    let area = length * width
    return area
}

console.log(areaOfRectagle(70,100));
// console.log(areaOfRectagle(50, -50));
// console.log(areaOfRectagle(-70,100));
console.log(areaOfRectagle(70.50,10.0));
// console.log(areaOfRectagle(70.50,0));
// console.log(areaOfRectagle(0,0));
