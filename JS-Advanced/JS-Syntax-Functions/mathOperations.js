function solve(num1, num2, operator) {
let result;
    if(operator === '+'){
    result = num1 + num2;
    console.log(result);
}else if(operator === '-'){
    result = num1 - num2;
    console.log(result);
}else if(operator === '*'){
    result = num1 * num2;
    console.log(result);
}else if(operator === '/'){
    result = num1 / num2;
    console.log(result);
}else if(operator === '%'){
    result = num1 % num2;
    console.log(result);
}else if(operator === '**'){
    result = num1 ** num2;
    console.log(result);
}
}
solve(5, 6, '+')
solve(3, 5.5, '*')