function concatenate(input){
let name = input[0];
let surname = input[1];
let age = Number(input[2]);
let city = input[3];
console.log(`Hello, my name is ${name} ${surname} and I am ${age} - years old, from ${city} !`)
}
concatenate(['Nikola', 'Videnov', '20', 'Sofia']);