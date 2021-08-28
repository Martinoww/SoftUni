function solve(input){
    let steps = 0;
    let stepsTarget = 10000;
    let index = 0
    let operator = '';
    
    while(steps <= stepsTarget){
        operator = input[index++]
        if(operator === 'Going home'){
            steps += Number(input[input.length - 1])
            break;
        }
        steps += Number(operator);
        
    }
    if(steps >= stepsTarget){
    console.log(`Goal reached! Good job!`)
    console.log(`${steps - stepsTarget} steps over the goal!`)
    }else{
        console.log(`${stepsTarget - steps} more steps to reach goal.`)
    }
    
    }

