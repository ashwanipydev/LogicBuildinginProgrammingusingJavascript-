//? Problem Statement
/**
 * *Celsius & Fahrenheit are 2 different scales two messure temperature 
 * *Formula(Temperature in degrees Celsius(c) * 9/5) + 32
 * *Example: 27 degrees = (27 * 9/5) + 32 = 80.6 Fahrenheit
 */

function convertToFahrenheit(c){
    let f = (c * 9/5) + 32
    return Math.ceil(f)
}

console.log(convertToFahrenheit(27));