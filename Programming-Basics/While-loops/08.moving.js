function solve(input){
let widthOfFreeSpace = Number(input.shift());
let lenghtOfFreeSpace = Number(input.shift());
let heightOfFreeSpace = Number(input.shift());
let totalFreeSpace = widthOfFreeSpace * lenghtOfFreeSpace * heightOfFreeSpace
let sizeOfOneBox = 1 * 1 * 1;
let numOfBoxes = input.shift()
let sum = 0;

while(numOfBoxes !== 'Done'){
    let totalNumOfBoxes = Number(numOfBoxes);
    sum += totalNumOfBoxes * sizeOfOneBox;
    if(sum > totalFreeSpace){
        let diff = sum - totalFreeSpace;
        console.log(`No more free space! You need ${diff} Cubic meters more.`)
        break;
    }
    numOfBoxes = input.shift()
}
if(sum <= totalFreeSpace){
    let leftSpace = totalFreeSpace - sum;
    console.log(`${leftSpace} Cubic meters left.`)
}

}
solve(["10",
"1",
"2",
"4",
"6",
"Done"])

