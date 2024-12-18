// lets talk about math library in Js 
// Math is an inbuit library to provide tools regarding math 

let pi = Math.PI;
console.log(pi);

console.log(Math.E);
// round up
console.log(Math.round(3.54))
// round down
console.log(Math.floor(3.54))
// always round up no matter the value
console.log(Math.ceil(3.14))
// trunc to remove the decimal values

console.log(Math.trunc(3.245))

// absolute values

console.log(Math.abs(-24))

// max and min values 
console.log(Math.max(3,4,5,7))
console.log(Math.min(3,4,5,6))

// // also contains the functions for sin cos tan etcc..

// part-II 
// Random number generator
// (Math.random() result in 0-1 decimals)
let randoomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randoomNumber);
