//if statement

let a = 10;
if (a > 100) {
  console.log(a + "is greater than 100");
}
if (a < 100) {
  console.log(a + "is lesser than 100");
}

// different operators
//a==b if a is equal to b
//a=b value of a is being assigned to b
//a > b a is greater b
//a <b a is lesser than b
// a>=b a is greater than or equal to b
// a<=b a is lesser than or equal to b
// a===b a has some value and same data type as b

// if else
let age = 10;
if (age > 19) {
  console.log("you are adult");
} else {
  console.log("you are not an adult");
}

//else if
let salary = 500;
if (salary > 1000) {
  console.log("slary more than 1000");
} else if (salary < 1000) {
  console.log("salary is less than 1000");
}


console.log(age==19? "age is 19":"you are not 19");

//switch case

switch (age) {
    case 10:
        console.log("you are kid");
        break;
    case 15:
        console.log(" you are tenager");
        break;
    default:
        console.log("you are senior");
        break;
}