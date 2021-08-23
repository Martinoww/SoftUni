function solve(input) {
  const n1 = Number(input[0]);
  const n2 = Number(input[1]);
  const operator = input[2];
  let result = 0;
  if (operator === "+") {
    result = n1 + n2;
    if (result % 2 === 0) {
      console.log(`${n1} ${operator} ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
    }
  } else if (operator === "-") {
    result = n1 - n2;
    if (result % 2 === 0) {
      console.log(`${n1} ${operator} ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
    }
  } else if (operator === "*") {
    result = n1 * n2;
    if (result % 2 === 0) {
      console.log(`${n1} ${operator} ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
    }
  }

  if (operator === "/" && n2 == 0) {
    console.log(`Cannot divide ${n1} by zero`);
}else if(operator ==='/'){
  result = n1 / n2;
  console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
}

  if (operator === "%" && n2 == 0) {
      console.log(`Cannot divide ${n1} by zero`);
  }else if(operator ==='%'){
    result = n1 % n2;
    console.log(`${n1} ${operator} ${n2} = ${result}`);
  }
}
solve(["123", "12", "/"]);

