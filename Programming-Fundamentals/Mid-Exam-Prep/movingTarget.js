function solve(input){
let targets = input.shift().split(' ').map(Number);

for(let line of input){
if(line === 'End'){
    console.log(`${targets.join('|')}`);
    return;
}
let command = line.split(' ')[0];
let index = Number(line.split(' ')[1]);
let num = Number(line.split(' ')[2]);

if(command === 'Shoot'){
if(index >= 0 && index <= targets.length - 1){
    targets[index] -= num;
    if(targets[index] <= 0){
        targets.splice(index, 1);
    }
}
}else if(command === 'Add'){
    if(index >= 0 && index <= targets.length - 1){
        targets.splice(index, 0, num)
    }else {
        console.log(`Invalid placement!`);
    }
}else if(command === 'Strike'){
    if(index >= 0 && index <= targets.length - 1){
        if(index - num >= 0 && index + num <= targets.length - 1){
            let start = index - num;
            let removingPower = 2 * num + 1
            targets.splice(start, removingPower)
        }else {
        console.log(`Strike missed!`);
        }
    } else {
        console.log(`Strike missed!`);
    }
}

}


}
// solve((["52 74 23 44 96 110",
// "Shoot 5 10",
// "Shoot 1 80",
// "Strike 2 1",
// "Add 22 3",
// "End"])
// )
solve((["1 2 3 4 5",
"Strike 0 1",
"End"])
)