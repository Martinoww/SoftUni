function solve(obj){

for(let [key, value] of Object.entries(obj)){
    console.log(`${key} -> ${value}`);
}


}
solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)