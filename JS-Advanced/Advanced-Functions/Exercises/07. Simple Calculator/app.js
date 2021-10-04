function calculator() {
let input1;
let input2 ;
let resultArea;


function init(selector1, selector2, resultSelector){
input1 = document.querySelector(selector1);
input2 = document.querySelector(selector2);
resultArea = document.querySelector(resultSelector);
}

function add(){
let num1 = Number(input1.value);
let num2 = Number(input2.value);
resultArea.value = num1 + num2
}

function subtract (){
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    resultArea.value = num1 - num2
}
    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



