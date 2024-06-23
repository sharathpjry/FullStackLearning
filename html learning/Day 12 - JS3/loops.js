console.log("loops");

//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for in
var person = { name: "sharath", lang: "js", age: 19 };

for (var i in person) {
  console.log(i + "=" + person[i]);
}

let animal = { name: "lion", age: 23 };

for (let i in animal) {
  console.log(i + "= " + animal[i]);
}

//for each - user on array,sets or maps
let arr1 = [1,2,4];
let sum = 0
arr1.forEach(element => {
    sum += element;  
});
console.log(sum);


