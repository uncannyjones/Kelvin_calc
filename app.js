const kelvin = 0;
//comment
const celsius = kelvin - 273;
//calculaTion
let fahrenheit = celsius * (9/5) + 32;
//floor to round off
fahrenheit = Math.floor(fahrenheit);
//console using interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);
