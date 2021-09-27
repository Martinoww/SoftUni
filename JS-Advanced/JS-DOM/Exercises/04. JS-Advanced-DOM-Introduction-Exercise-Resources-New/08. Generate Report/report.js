function generateReport() {
  let checkedIndexes = [];
  let propertiesKeys = [];
  let resultArrOfObjs = [];

  for(let a = 0; a < document.querySelectorAll('th input').length; a++){
    if (document.querySelectorAll('th input')[a].checked) {
        checkedIndexes.push(a);
        propertiesKeys.push((document.querySelectorAll('th')[a].textContent).toLowerCase().trim());
      }
  }

  for(let i = 0; i < document.querySelectorAll('tbody tr').length; i++){
    let obj = {};
    for(let k = 0; k < propertiesKeys.length; k++){
        obj[propertiesKeys[k]] = document.querySelectorAll('tbody tr')[i].children[checkedIndexes[k]].textContent
    }
    resultArrOfObjs.push(obj);
  } 

document.getElementById('output').value = JSON.stringify(resultArrOfObjs);
}
