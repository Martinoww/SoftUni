function solve(arrOfEls){
let nums = [];
let result;
for(let el of arrOfEls){
    if(typeof el === "number"){
        nums.push(el);
    }else {
        if(nums.length < 2){
            return console.log(`Error: not enough operands!`);
        }
        if(el === '+'){
            let [num1, num2] = nums.splice(nums.length-2, 2)
            result = num1 + num2;
            nums.push(result);
        }else if(el === '-'){
            let [num1, num2] = nums.splice(nums.length-2, 2)
            result = num1 - num2;
            nums.push(result);
        }else if(el === '*'){
            let [num1, num2] = nums.splice(nums.length-2, 2)
            result = num1 * num2;
            nums.push(result);
        }else if(el === '/'){
            let [num1, num2] = nums.splice(nums.length-2, 2)
            result = Math.floor(num1 / num2);
            nums.push(result);
        }else if(el === '%'){
            let [num1, num2] = nums.splice(nums.length-2, 2)
            result = Math.floor(num1 % num2);
            nums.push(result);
        }else if(el === '**'){
            let [num1, num2] = nums.splice(nums.length-2, 2)
            result = num1 ** num2;
            nums.push(result);
        }
    }
}
if(nums.length > 1){
    console.log(`Error: too many operands!`);
}else {
    console.log(nums[0]);
}
}
solve([3,
    4,
    '+']   
    )