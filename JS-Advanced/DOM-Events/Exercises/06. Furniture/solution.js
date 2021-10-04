function solve() {
  let table = document.querySelector('table.table tbody');
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);
  
  
  function generate(e){
    const data = JSON.parse(input.value);
    
    for(let item of data){ 
    const row = document.createElement('tr');
  
    row.appendChild(createCell('img', {src:item.img}));
    row.appendChild(createCell('p', {}, item.name));
    row.appendChild(createCell('p', {}, Number(item.price)));
    row.appendChild(createCell('p', {}, Number(item.decFactor)));
    row.appendChild(createCell('input', {type:'checkbox'}));
  
    table.appendChild(row);
  }
  }
  function createCell(nestedTag, props, content){
    const cell = document.createElement('td');
    const nested = document.createElement(nestedTag);
    
    for(let prop in props){
      nested[prop] = props[prop];
    }
  
  if(content){
    nested.textContent = content;
  }
  
    cell.appendChild(nested);
    return cell;
  }
  
  function buy(e){
  const furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
  .map(b => b.parentElement.parentElement)
  .map(r => ({
    name:r.children[1].textContent,
    price:Number(r.children[2].textContent),
    decFactor:Number(r.children[3].textContent),}));
    let total = 0;
    let decFactor = 0;
    let names = [];
    for(let item of furniture){
      names.push(item.name);
      total += item.price;
      decFactor += item.decFactor;
    }
  
    let result = `Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${decFactor / furniture.length}`;
  
  output.value = result;
  }
}