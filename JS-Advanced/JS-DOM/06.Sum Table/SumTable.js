function sumTable() {
let elements = document.querySelectorAll('table tr');
let result = 0;
for(let i = 1; i <elements.length - 1; i++){
    let cell = elements[i].lastChild;
    let input = cell.firstChild;
    result += Number(input.value);
}
document.getElementById('sum').textContent = result;
}