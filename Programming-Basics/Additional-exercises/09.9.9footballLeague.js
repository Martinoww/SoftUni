function solve(input){
let stadiumCapacity = Number(input.shift());
let numOfFans = Number(input.shift())
let fansInA = 0;
let fansInB = 0;
let fansInV = 0;
let fansInG = 0;
for(let i = 1; i <= numOfFans;i++){
    let stadiumSector = input.shift()
    if(stadiumSector === "A"){
fansInA++
    }else if( stadiumSector === "B"){
fansInB++
    }else if(stadiumSector === "V"){
fansInV++
    }else if(stadiumSector === "G"){
fansInG++
    }
}
let percentOfFansInASector = fansInA / numOfFans * 100;
let percentOfFansInBSector = fansInB / numOfFans * 100;
let percentOfFansInVSector = fansInV / numOfFans * 100;
let percentOfFansInGSector = fansInG / numOfFans * 100;
let percentOfFansInStadium = numOfFans / stadiumCapacity * 100;

console.log(`${percentOfFansInASector.toFixed(2)}%`);
console.log(`${percentOfFansInBSector.toFixed(2)}%`);
console.log(`${percentOfFansInVSector.toFixed(2)}%`);
console.log(`${percentOfFansInGSector.toFixed(2)}%`);
console.log(`${percentOfFansInStadium.toFixed(2)}%`);

}
solve(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B" ]);