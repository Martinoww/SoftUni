function solve(r){
if(typeof r != "number"){
    console.log(`We can not calculate the circle area, because we receive a ${typeof r}.`);
}else {
   let result = r ** 2 * Math.PI;
   console.log(result.toFixed(2));
}
}
solve(5)
solve('name')