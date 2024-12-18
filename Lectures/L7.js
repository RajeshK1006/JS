// map() and foreach() method used only on the iterables

let nums = [1,2,3,4,5]
// for for each method element, index, array is passed as arguments automatically 

nums.forEach(cubearr);

function cubearr(element, index ,array){
  array[index] = element ** 3;
}

console.log(nums)

function double(element){
  return element * 2;
}

let dobs = nums.map(double);
console.log(dobs)

console.log(nums)

// .forEach() apploes the call back to the oriiginal array or iterable 
// .map() creteas an new array while keeping the org array untouched
