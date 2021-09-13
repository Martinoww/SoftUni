function solve(arrOfStr){
let destinations = {};

for(let line of arrOfStr){
    let [country, town, price] = line.split(' > ');
    if(!Object.keys(destinations).includes(country)){
        destinations[country] = {};
    }
   if(!Object.keys(destinations[country]).includes(town)){
       destinations[country][town] = Number(price);
   }
       if(destinations[country][town] > Number(price)){
           destinations[country][town] = Number(price)
    }
   
    
}
let sorted = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]) || 
Object.values(a[1]).reduce((x, y) => x + y) - Object.values(b[1]).reduce((x, y) => x + y));

for(let [country, towns] of sorted){
    let resultStr = `${country} -> `;
    let townEntries = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}`);
    console.log(`${country} -> ${townEntries.join(' ')}`);
}

}
solve([
    "Bulgaria > Sofia > 800",
    "Bulgaria > Sopot > 500",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Varna > 200"
    ]
    )