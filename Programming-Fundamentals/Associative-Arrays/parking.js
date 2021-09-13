function solve(arr){
let parkingObj = {};

for(let line of arr){
    let [command, plateNum] = line.split(', ');
    if(command === 'IN'){
        if(!Object.keys(parkingObj).includes(plateNum)){
            parkingObj[plateNum] = 0;
        }
    }else {
        if(Object.keys(parkingObj).includes(plateNum)){
            delete parkingObj[plateNum];
        }
    }
}
if(Object.keys(parkingObj).length > 0){
    let sorted = Object.entries(parkingObj).sort((a, b) => a[0].localeCompare(b[0]));
    
    for(let [key, value] of sorted){
        console.log(key);
    }

}else {
    console.log(`Parking Lot is Empty`);
}


}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'
]
)