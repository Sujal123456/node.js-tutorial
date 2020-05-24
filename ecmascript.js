//ES6
//No eeroe even if we use twice
/
var a = 30;
var a = 40;
console.log(a);


//let
//Error
let a = 30;
let a = 40;
console.log(a);
//But if we use a function
//It forms a scope variable
let a = 30;

function abc() {
    let a = 40;
    console.log(a);
}
console.log(a)
abc();



//Const
const a = 30;
const a = 40;

//create a const object
const a = {
    "name" = "Sujal"
    age = "18"
}
a.age = 30;
console.log(a);

//TEMPLATE STRING
var name = "Sujal";
age = 18;
console.log("Hyy %s you are %s years old", name, age);