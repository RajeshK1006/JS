let rollBtn = document.getElementById("dice");
let label = document.getElementById("random");
let num;

let min = 1;
let max  = 6;

rollBtn.onclick = function(){
  num  = Math.floor(Math.random() * max) + min;
  label.textContent = num;
}
