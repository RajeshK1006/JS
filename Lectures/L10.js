// Arrow functions more beneficial and always used that function expression or function declaration


// formula == (parameters) => some code

const helper = () => console.log("rajesh wrote an arraow function")

helper()

const helper1 = (name,age) =>{
  console.log(`hey ${name} is it realy u with ${age} age..`)
}

helper1("rajesh",22)


setTimeout( () => console.log("this is settime out after 3 seconds"), 3000);


// arrow function with map, reduce, filter methods alsp foreach

let nums = [1,2,3,4,5,6]

let ans = nums.filter((element)=>element %2 ===0)
console.log(ans)

// in arrrous functions no return staetiem is needed for only a single line code or without curly braces


