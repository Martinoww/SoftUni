function heroicInventory(arrOfStr){
let heroCatalog = [];

for(let line of arrOfStr){
let [name, level, items] = line.split(' / ');
items = items ? items.split(', ') : [];
let heroObj = {
    name: name,
    level: Number(level),
    items: items,
}
heroCatalog.push(heroObj);
}
return JSON.stringify(heroCatalog);
}
console.log(heroicInventory(['Jake / 1000 / ']
)); 