// arrays in js 
// same as in oython
let fruit = ["Apple","lime","tomato"];
console.log(fruit[0])
fruit[0] = 'banana';
fruit.push("custorf"); 
// where push and pop focuss on last 

fruit.pop();
// fruit.unshift("mango") add it in the start
console.log(fruit)
// fruit.shift() remove the starting element 
console.log(fruit)

console.log(fruit.length);
console.log(fruit.indexOf("lime"))

console.log(fruit.sort())
console.log(fruit.sort().reverse())



// part 2
// the spread operator ...
let num = [1,2,3,4,5,6];
console.log(Math.max(...num)) 
// ... unpacks the list or array into individuals elements 

let name = ["apple","orange","mango"]

let newfruit =[...name,...num,"rajesh"]
console.log(newfruit)

// part  3 
// rest operators 
// vice versa of spread , it bundles the idividuals into an collection or array

// used in function to take any number of arguments

let name1 = "rajes"
let name2 = "sanjay"

function getname(...name){
  return name;
}

let ans = getname(name1,name2)
console.log(ans)
