let countl = document.getElementById("num");

let count = 0;
let add = document.getElementById("increase");


let reset = document.getElementById("reset");



let sub = document.getElementById("decrease");


add.onclick = function(){
  count  += 1;
  countl.textContent= count;
  
}
sub.onclick = function(){
  count  -= 1;
  countl.textContent= count;
  
}
reset.onclick = function(){
  count  = 0;
  countl.textContent= count;
  
}
