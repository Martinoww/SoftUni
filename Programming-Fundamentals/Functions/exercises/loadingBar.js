function loadingBar(num){
let neededRotations = num / 10;
let arrayOfLoadingBar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', ]
let loadingSymbol = '%'
for(let i = 0; i < neededRotations; i++){
arrayOfLoadingBar[i] = loadingSymbol
}
if(neededRotations === 10){
    console.log(`${num}% Complete!`)
    console.log(`[${arrayOfLoadingBar.join('')}]`)

}else{
    console.log(`${num}% [${arrayOfLoadingBar.join('')}]`)
    console.log(`Still loading...`)
}

}
loadingBar(50)