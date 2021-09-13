function partyTime() {
let object = {
    'Georg': {'total': 40, 'army1': 25, 'army2': 15},
    'Alex': {'total': 50, 'army1': 20, 'army2': 30},
    'Sasha': {'total': 25, 'army1': 20, 'army2': 5},
}
let sorted = Object.entries(object).sort((a, b) => b[1].total - a[1].total)
for(let [key, value] of sorted){
    console.log(`${key} ---> ${value.total}`);
    let sortedValues = Object.entries(value).sort((a, b) => b[1] - a[1]);
    for(let [token, element] of sortedValues){
        if(token === 'total'){
            continue;
        }else{
            console.log(`>>>${token} - ${element}`);
        }
    }
}
}
partyTime()