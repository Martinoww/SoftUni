function solve(string){
let arrOfStrings = string.split(' ');
let counterObj = {};

for(let el of arrOfStrings){
   let elToLowerCase = el.toLowerCase();
   if(!Object.keys(counterObj).includes(elToLowerCase)) {
       counterObj[elToLowerCase] = 0;
   }
   counterObj[elToLowerCase] += 1
}
let result = [];
for(let [key,value] of Object.entries(counterObj)){
    if(value % 2 !== 0){
        result.push(key);
    }
}
console.log(result.join(' '));

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')