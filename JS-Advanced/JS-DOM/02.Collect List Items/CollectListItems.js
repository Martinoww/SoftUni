function extractText() {
let elements = document.getElementById('items').children;
let result = [];

for( let line of Array.from(elements)){
    result.push(line.textContent);
}
document.getElementById('result').value = result.join('\n')

}