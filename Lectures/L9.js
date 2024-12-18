// .reduce() = reduces the elements of the arra into a singel value

let arr = [5,6,10,48,19]

let tot = arr.reduce(sum);

console.log(tot)


function sum(accumulator,element){
  return accumulator + element
  // previous sum + curr ele goes on this pattern untill the end 
// prefix summ array 
}

// min, max methods from the Math module can be used 



// function decorations is same as primitive declaration in all languahes 

function helper(){
  console.log("hello")
}

// helper()

setTimeout(helper, 3000);
// settimeout attribute takes an callback function and a time limit and executes the callback after the setted time limit  

// function expressions

let n = [1,2,3,4,5]

let ans = n.filter(function(ele){
  return ele %2==0;
})
console.log(ans)
