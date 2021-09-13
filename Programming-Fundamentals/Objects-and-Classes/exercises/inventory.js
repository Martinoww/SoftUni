function inventory(listOfHeroes){
let newListOfHeroes = []

for(let heroData of listOfHeroes){
    let splitedData = heroData.split(' / ');
    let name = splitedData[0];
    let level = Number(splitedData[1]);
    let items = splitedData[2].split(', ');

    let heroObj = {
        name,
        level,
        items,
    }
    newListOfHeroes.push(heroObj);
}
newListOfHeroes.sort((a, b) => a.level - b.level)

for(let hero of newListOfHeroes){
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.sort((a, b) => a.localeCompare(b)).join(', ')}`);

}

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )