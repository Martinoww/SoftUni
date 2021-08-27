function solve(input){
let username = input.shift();
let password = input.shift();
let data = '';
while(data != password){
    data = input.shift()
}
console.log(`Welcome ${username}!`)



}
solve(["Gosho",
"secret",
"secret"])

