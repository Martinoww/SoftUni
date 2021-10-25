function solve(arrOfStr){
let carBrands = new Map();

for(let line of arrOfStr){
let [carBrand, carModel, qtity] = line.split(' | ');
qtity = Number(qtity);

    if(!carBrands.get(carBrand)){
        carBrands.set(carBrand, {});
    }

        if(Object.keys(carBrands.get(carBrand)).includes(carModel) == false){
          let currBrand = carBrands.get(carBrand);
          currBrand[carModel] = qtity;
        }else {
          let currBrand = carBrands.get(carBrand);
          currBrand[carModel] += qtity;
        }
    }
for(let brand of carBrands){
console.log(brand[0]);
    for(let key in brand[1]){
        console.log(`###${key} -> ${brand[1][key]}`);
    }

}

}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)