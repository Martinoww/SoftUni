function repeatString(string, numOfRotations){
let newArray = []
for(let i = 0; i < numOfRotations; i++) {
newArray.push(string)
}
console.log(newArray.join(''))

}
repeatString('String',
    2,
    )