// .filter() applied filters to the array using custom function and returns a new array  if the call bac return the truthy value

let nums = [1,2,3,4,45,6,7]

function even(ele){
  if (ele%2===0){
    return true
  }
  return false
}

let res = nums.filter(even)
console.log(nums)
console.log(res)


let persons = [68,89,1,34,2,5,7,13]

function isAdult(element){
  return element>=18
}

let ans = persons.filter(isAdult)

console.log(ans)
