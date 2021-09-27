function lowestPrice(arrOfStr){
let productCatalog = {};

for(let line of arrOfStr){
let [town, product, price] = line.split(' | ');
price = Number(price);

if(productCatalog[product] == undefined){
    productCatalog[product] = {};
}
productCatalog[product][town] = price;

}
let entriesOfCatalog = Object.entries(productCatalog);
for(let [k, v] of entriesOfCatalog){
    let sorted = Object.entries(v).sort((a, b) => {
        return a[1] - b[1];
    })
    console.log(`${k} -> ${sorted[0][1]} (${sorted[0][0]})`);
}

}
lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);