function solve(str){
if(str === 'Monday'){
    console.log(1);
}else if(str === 'Tuesday'){
    console.log(2);
}else if( str === 'Wednesday'){
    console.log(3);
}else if(str === 'Thursday'){
    console.log(4);
}else if(str === 'Friday'){
    console.log(5);
}else if(str === 'Saturday'){
    console.log(6);
}else if(str === 'Sunday'){
    console.log(7);
}else {
    console.log(`error`);
}
}
solve("Monday")
solve('Invalid')