function searchForNumber(originalArr, instructions){
let firstInstr = Number(instructions[0]);
let secondInstr = Number(instructions[1]);
let numberWeAreSearchingFor = Number(instructions[2])

let slicedElements = originalArr.slice(0, firstInstr)
slicedElements.splice(0, secondInstr);
let counter = 0
for(let i = 0; i < slicedElements.length; i++){
    if(Number(slicedElements[i]) === numberWeAreSearchingFor){
        counter++
    }
}
console.log(`Number ${numberWeAreSearchingFor} occurs ${counter} times.`);

}
searchForNumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )