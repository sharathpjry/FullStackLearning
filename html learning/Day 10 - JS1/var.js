console.log("hello");

var language = "java script";
var marks = 10;
var ratings = 4.5;

console.log(language,marks,ratings);

language = "java";
console.log(language,marks,ratings);

/* rules
variable name should not start with number
variable can start with _ , letters
variable names are case sensitive

*/
// const you cannot redeclare const variable
const marks1 = 100;
//marks1 = 95;
console.log(marks1);

// let is gnerally used in block level element
{
let name = "sharath"
console.log(name);
}
console.log(name);


var city = "berlin";
console.log(city);

{
    let city = "bangalore";
    console.log(city);
}


var city = "berlin";


{
    let city = "bangalore";
    console.log(city);
}

console.log(city);




const arr =[10,20,30,40];
console.log(arr);
arr.push(50);
console.log(typeof(arr ));