function printElement(array){
let lastElement = array.length - 1
let nSteps = Number(array[lastElement])
array.pop()
let newArray = []

for(let i = 0; i < array.length; i += nSteps){
newArray.push(array[i])

}
console.log(newArray.join(' '))

}
printElement(['1', '2', '3', '4', '5', '6'])