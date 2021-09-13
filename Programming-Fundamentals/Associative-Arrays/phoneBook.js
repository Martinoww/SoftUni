function solve(arr){
let phoneBook = [];

for(let line of arr){
let [name, num] = line.split(' ');
let obj = {
    name: name,
    num: num
}
let index = phoneBook.findIndex((x) => x.name === name)
if(index >= 0){
    phoneBook[index].num = num
}else {
    phoneBook.push(obj)
}
}

for(let el of phoneBook){
console.log(`${el.name} -> ${el.num}`);
}


}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)