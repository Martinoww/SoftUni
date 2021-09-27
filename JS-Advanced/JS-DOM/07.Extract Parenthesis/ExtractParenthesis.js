function extract(content) {
let pattern = /\((?<name>.+?)\)/g;
let match = pattern.exec(document.getElementById(content).textContent);
let result= '';
while(match != null){
let {name} = match.groups;
result += name;
result += '; ';
match = pattern.exec(document.getElementById(content).textContent);
}
return result;
}