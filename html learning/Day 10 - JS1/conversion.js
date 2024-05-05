// type coverion

let variable1  = 100 ;
variable1 = String(100);
console.log(typeof(variable1));


let variable2 = true;
variable2 = String(true);
console.log(typeof(variable2));

let variable3 = new Date();
console.log(variable3);


let x = "1234";
let y = parseInt(x)
console.log(y, typeof(y));


// coercion

let a = "123"
let b = 2
console.log(a+b);