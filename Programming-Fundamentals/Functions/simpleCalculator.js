function simpleCalculator(numOne, numTwo, operator) {
  let multiply = (a, b) => a * b;
  let divide = (a, b) => a / b;
  let add = (a, b) => a + b;
  let subtract = (a, b) => a - b;
let result = 0;
if(operator == 'multiply'){
    result = multiply(numOne, numTwo)
}else if(operator == 'divide'){
    result = divide(numOne, numTwo)
}else if(operator == 'add'){
    result = add(numOne, numTwo)
}else if(operator == 'subtract'){
    result = subtract(numOne, numTwo)
}
console.log(result)


}
simpleCalculator(5, 5, "add");
