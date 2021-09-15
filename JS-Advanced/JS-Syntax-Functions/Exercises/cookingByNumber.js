function solve(num, op1, op2, op3, op4, op5){
num = Number(num);
let arr = [op1, op2, op3, op4, op5];

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'chop'){
        console.log(num = chop(num));
    }else if(arr[i] === 'dice'){
        console.log(num = dice(num));
    }else if(arr[i] === 'spice'){
        console.log(num = spice(num));
    }else if(arr[i] === 'bake'){
        console.log(num = bake(num));
    }else if(arr[i] === 'fillet'){
        console.log(num = fillet(num));
    }
}

function chop(num){
return num / 2;
}
function dice(num){
return  Math.sqrt(num)
}
function spice(num){
    return num + 1
}
function bake(num){
    return num * 3
}
function fillet(num){
    return num * 0.8
}
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')