function reverse(name){

let splitString = name.split('')
let reversingArray = splitString.reverse()
let joining = reversingArray.join('')

console.log(joining)
}
reverse('SoftUni')