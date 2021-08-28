function solve(input) {
let w = Number(input[0]);
let l =  Number(input[1]);
let cakeCapacity = w * l;
let piecesTaken = 0;
let command = input[2];
let index = 3;
while(command !== 'STOP'){
    piecesTaken += Number(command);
    if(piecesTaken > cakeCapacity){
        break;
    }
    command = input[index++]
}
if(piecesTaken > cakeCapacity){
    console.log(`No more cake left! You need ${piecesTaken - cakeCapacity} pieces more.`)
}else{
    console.log(`${cakeCapacity - piecesTaken} pieces are left.`)
}


}
solve(["10",
"2",
"2",
"4",
"6",
"STOP"])

