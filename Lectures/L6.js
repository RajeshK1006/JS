// call backs function to controll which funtion hast to get execuuted after the completion of the ongoin function 
// generally an function is passed as an argument to another funtion


// used t handle the asynchronous operations of the JS 

// 1.Reading a file
// 2. Network requests
// 3.Interacting with databases and dom 

// in simple terms saying to the funtion1 hey when you are dome call the funtion2

function greet(callback){
  console.log("greeting")
  callback()
  
}

function hello(){
  console.log("Ah ! hello")
}





greet(hello)


function sum(x,y,callback){
  let res = x+y;
  callback(res);
}

function display(s){
  console.log(s);
}

sum(3,4,display)
