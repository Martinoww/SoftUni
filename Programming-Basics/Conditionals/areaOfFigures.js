function solve(input) {
const figure = input[0];
const a = Number(input[1]);
const b = Number(input[2]);
if(figure === 'square'){
    let area = a * a;
    console.log(area.toFixed(3));
}else if(figure === 'rectangle'){
    let area = a * b;
    console.log(area.toFixed(3));
}else if(figure === 'circle'){
    let radius = a;
    let area = Math.PI * radius * radius;
    console.log(area.toFixed(3));
}else if(figure === 'triangle'){
    let height = b;
    let area = (a * height) / 2;
    console.log(area.toFixed(3));
}



}
solve(["square", "5"]);
solve(["rectangle", "7", "2.5"]);
solve(["circle", "6"]);
solve(["triangle", "4.5", "20"]);
