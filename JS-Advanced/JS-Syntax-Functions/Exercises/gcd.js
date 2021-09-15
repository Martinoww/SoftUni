function solve(x, y){
while(y){
    let t = y;
    y = x % y;
    x= t;
}
return console.log(x);
}
solve(2154, 458)