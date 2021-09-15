function solve(x1, y1, x2, y2){
let y;
let x;
let result;

for(let i = 0; i < 3; i++){
if(i == 0){
y = x1 - 0;
x = y1 - 0;
result = Math.sqrt(x * x + y * y);
if(Number.isInteger(result)){
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
}else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
}
}else if(i === 1){
    y = x2 - 0;
    x = y2 - 0;
    result = Math.sqrt(x * x + y * y);
    if(Number.isInteger(result)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }  
}else {
    y = x2 - x1;
    x = y2 - y1;
    result = Math.sqrt(x * x + y * y);
    if(Number.isInteger(result)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }   
}
}




}
solve(2, 1, 1, 1)