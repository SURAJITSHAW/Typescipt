/* DOM variables */
const button = document.querySelector("button");
/* 
  1. This `!` tells TS this expression never yeild NULL, this always find a Element. 
  
  2. This `as HTMLInputElement` tells what HTML element it would be, it explicitly had to tell that to TS. [Type Casting]
*/
const number1 = document.getElementById("number1")! as HTMLInputElement;
const number2 = document.getElementById("number2")! as HTMLInputElement;

/* explicitly set types (number) of these args */
function sum(num1: number, num2: number) {
  return num1 + num2;
}

/* We always get a string value from value properteis of any html elements */
button.addEventListener("click", function () {
  console.log(sum(+number1.value, +number2.value));
});
