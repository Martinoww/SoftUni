function solve(input) {
const hourOfExam = Number(input[0]);
const minOfExam = Number(input[1]);
const hourOfArrival = Number(input[2]);
const minOfArrival = Number(input[3]);
let totalMinOfExamStart = hourOfExam * 60 + minOfExam;
let totalMinOfArrival = hourOfArrival * 60 + minOfArrival;
let difference = Math.abs(totalMinOfArrival - totalMinOfExamStart);
let hourDiff = Math.floor(difference / 60)
let minDiff = difference % 60;
if(minDiff === 0 || minDiff <10 && hourDiff > 0){
minDiff = `0${minDiff}`;
}

if(totalMinOfArrival === totalMinOfExamStart){
    console.log(`On time`);
}else if(totalMinOfArrival > totalMinOfExamStart && difference < 60){
    console.log(`Late`);
    console.log(`${minDiff} minutes after the start`);
}else if( totalMinOfArrival > totalMinOfExamStart && difference >= 60){
    console.log(`Late`);
    console.log(`${hourDiff}:${minDiff} hours after the start`)
}else if(totalMinOfArrival < totalMinOfExamStart && difference <= 30){
    console.log(`On time`);
    console.log(`${minDiff} minutes before the start`)
}else if ( totalMinOfArrival < totalMinOfExamStart && difference > 30 && difference < 60){
    console.log(`Early`);
    console.log(`${minDiff} minutes before the start`);
}else{
    console.log(`Early`);
    console.log(`${hourDiff}:${minDiff} hours before the start`);
}

}
solve(["10",
"00",
"10",
"00"])



