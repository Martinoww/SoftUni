function arrayRotation(array, numberOfRotations){

for(let i = 0; i < numberOfRotations; i++){
    let newElement = array.shift()
    array.push(newElement)
}

console.log(array.join(' '));
}
arrayRotation([2, 4, 15, 31], 5)