function solve(arr){
let addressBook = []

for(let line of arr){
    let [name, address] = line.split(':');
    let obj = {
        name: name,
        address: address,
    }
    let index = addressBook.findIndex((x) => x.name === name);
    if(index >= 0){
        addressBook[index].address = address;
    }else{
        addressBook.push(obj); 
    }
    }

addressBook.sort((a, b) => a.name.localeCompare(b.name));

for(let el of addressBook){
console.log(`${el.name} -> ${el.address}`);
}

}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)