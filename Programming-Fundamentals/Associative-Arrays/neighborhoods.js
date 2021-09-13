function solve(arr){
let neighborhoodList = arr.shift().split(', ');
let map = new Map();
for(let neigh of neighborhoodList){
    map.set(neigh, [])
}

for(let line of arr){
let [neigh, name] = line.split(' - ');

if(neighborhoodList.includes(neigh)){
   map.get(neigh).push(name)
}
}
let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length);

for(let kvp of sorted){
    console.log(`${kvp[0]}: ${kvp[1].length}`);
    let arr = kvp[1]
    console.log(printLine(arr));
}
function printLine(arr){
    let print = ''
    for(let i =0; i < arr.length; i++){
        if(i == arr.length - 1){
        print += `--${arr[i]}`;
        break;
        }else {
            print += `--${arr[i]}\n`;
        }
    }
        return print
}
}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)