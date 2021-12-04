function solve() {
window.addEventListener('load', onPageLoad);

}
solve()
const registerUrl = `http://localhost:3030/users/register`;
const loginUrl = `http://localhost:3030/users/login`;
let userData;



async function onPageLoad(){
  
userData = sessionStorage.getItem('userData');



}

async function makeRequest(url, options){
try{
let response = await fetch(url, options);
if(response.ok == false){
  let err = await response.json();
  throw new Error(err.message);
}else {
  let data = response.json();
  return data;
}
}catch (err){
  alert(err.message);
}
}