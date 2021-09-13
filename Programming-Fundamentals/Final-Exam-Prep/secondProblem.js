function solve(input){
let pattern = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})(\1)/g
let match = pattern.exec(input)
let destinations = []
let total = 0
while(match != null){
let {name} = match.groups
destinations.push(name)
total += name.length
match = pattern.exec(input)
}
console.log(`Destinations: ${destinations.join(', ')}`);
console.log(`Travel Points: ${total}`);
}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
solve(`ThisIs some InvalidInput`)