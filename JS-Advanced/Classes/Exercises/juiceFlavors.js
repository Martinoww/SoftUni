function solve(arrOfStr){
let juiceBottles = {};

let fruits = new Map();

for(let line of arrOfStr){
let [fruit, qtity] = line.split(' => ');
qtity = Number(qtity);
    if(!fruits.get(fruit)){
        fruits.set(fruit, qtity);
    }else {
    let addedQntity = fruits.get(fruit) + qtity;
    fruits.set(fruit, addedQntity);
    }    
    if(fruits.get(fruit) >= 1000){
        let bottles = 0;
        while (fruits.get(fruit) >= 1000){
            let expenses = fruits.get(fruit) - 1000;
            fruits.set(fruit, expenses);
            bottles++;
        };
        if(juiceBottles[fruit] === undefined){
            juiceBottles[fruit] = bottles;
        }else {
            juiceBottles[fruit]+= bottles;
        }
    }

}

for(let key in juiceBottles){
    console.log(`${key} => ${juiceBottles[key]}`);
}
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])