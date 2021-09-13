function solve(arrOfStr) {
    let name;
    let length;
    let garages = {};
for(let line of arrOfStr){
    let splitedLine = line.split(' - ')
    let garageNumber = splitedLine.shift();

    if(!Object.keys(garages).includes(garageNumber)){
        garages[garageNumber] = {};
    }

    let secondSplit = splitedLine.toString().split(', ');

    let carInfoObj = {};
    for(let token of secondSplit){
    let [firstPart, secondPart] = token.split(': ');
    carInfoObj[firstPart] = secondPart;
    }

    length = Object.keys(garages[garageNumber]).length;
    name = `car ${length + 1}`;
    garages[garageNumber][name] = carInfoObj;
}

for(let [garageNum, garageInfo] of Object.entries(garages)){
    console.log(`Garage № ${garageNum}`);
    for(let [key, value] of Object.entries(garageInfo)){
        let resultLine = ``
        
        for(let token of Object.entries(value)){
            resultLine += `${token.join(' - ')}, `
        }
        let newLine = resultLine.substring(0, resultLine.length - 2)
        
        console.log(`--- ${newLine}`);
    }
}

}
solve([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
