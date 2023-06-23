//Challenge 1
// Your code goes here
// Step 1: Create a function with the function name as ageCalculator and pass two parameters, first one is birthYear and the second one is the presentYear.
function ageCalculator (birthYear, presentYear){
  var age = presentYear - birthYear;
  return age;
}
//Step 2: Pass two arguments as birthYear and presentYear while calling the function.
var birthYear= 2002;
var presentYear= 2023;
//Step 3: Calculate the possible age and return it.
var age = ageCalculator( birthYear, presentYear)
//Step 4: Display the age on the console.
console.log(age)

//Challenge 2: Following is the code snippet commented , remove the comments and get started with the challenge. Find the errors and rewrite the function.
//created a funtion named Addition assigned two parameters as a and b.
function addition(a,b){
  let c = a+b;
  return c;
}
//passed two arguemnts as a and b while calling the funtion
var a=3;
var b=2;
//calculated the c and  
var c = addition(a,b)
//printed the output in the console
console.log(c);
//Challenge 3:
// Step 1: Declare the variable "x" with "var" keyword and store a string value "I can access it."
console.log(x)
var x ="I can acces it."
//Step 2: Console log the value above the declaration of x variable.
var a= console.log(x)
//Step 3: Console log the value after the decalaration of x.

//Challenge 4: Create an arrow function for adding two numbers. Console log the value.
var addNumbers =(p, s)=>{
  return (p+s);
}
const result= addNumbers(2,7);
console.log(result)