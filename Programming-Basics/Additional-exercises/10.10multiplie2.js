function solve(input){
let sum = '';
for(let i = 1; i <= 100; i++){
    let number = Number(input.shift())
    if(number < 0){
        console.log(`Negative number!`)
        break;
    }else if(number >= 0 ){
        sum = `Result: ${(number * 2).toFixed(2)}`
        console.log(sum)
    }
    }
    
    
}



solve(['23.43', '12.3245', '0', '65.23432', '23', '65', '-12'])