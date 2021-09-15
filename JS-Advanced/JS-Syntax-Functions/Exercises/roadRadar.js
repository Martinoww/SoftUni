function solve(speed, place){
let speedLimit;

if(place === 'motorway'){
speedLimit = 130;
}else if(place === 'interstate'){
speedLimit = 90;
}else if(place === 'city'){
speedLimit = 50;
}else if(place === 'residential'){
speedLimit = 20;
}
let speedingTag = '';
let diff = speed - speedLimit;

if(diff > 0){
if (diff <= 20){
speedingTag = 'speeding';
}else if(diff <= 40){
speedingTag = 'excessive speeding';
}else if(diff > 40){
speedingTag = 'reckless driving';
}
console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${speedingTag}`);
}else {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
}



}
solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')
