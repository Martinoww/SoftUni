function solve(text){
let splitedTxt = text.split('\\');
let neededLine = splitedTxt.pop();
let splitedLine = neededLine.split('.')
let extension = splitedLine.pop();
let name = splitedLine.join('.');
console.log(`File name: ${name}`);
console.log(`File extension: ${extension}`);



}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')