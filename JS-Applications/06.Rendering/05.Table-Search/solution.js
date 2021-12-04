import { html, render } from "./node_modules/lit-html/lit-html.js";
const root = document.querySelector("tbody");
const searchBtn = document.querySelector("#searchBtn");
const url = 'http://localhost:3030/jsonstore/advanced/table';

let students = null;

async function getData(){
   searchBtn.addEventListener('click', onSearch);
   const response = await fetch(url);
   if(response.ok != true){
      const err = await response.json();
      alert(err.message);
      return;
   }
const data = await response.json();
const dataValues = Object.values(data);
const updatedValues = [];
dataValues.map(d=> updatedValues.push({
   studentData:{'_id':d._id, 'firstName':d.firstName, 'lastName':d.lastName, 'email':d.email, 'course':d.course},
   isMatch: false
}))
students = updatedValues;
render(updatedValues.map(st => trTemplate(st)), root);



function onSearch(){
   const input = document.getElementById('searchField');
   
   if(input.value != ''){
      for(let item of updatedValues){
         const values = Object.values(item.studentData);
         const match = values.some(d => d.toLocaleLowerCase().includes(input.value.toLocaleLowerCase().trim()));
         if(match){
            item.isMatch = true;
         }else {
            item.isMatch = false;
         }
      }
   }
   
   render(updatedValues.map(st => trTemplate(st)), root);
   input.value = '';
   }
}
getData()


const trTemplate = (student) => html` 
<tr .value="${student.studentData._id}" class="${student.isMatch ? 'select' : ''}">
  <td>${student.studentData.firstName} ${student.studentData.lastName}</td>
  <td>${student.studentData.email}</td>
  <td>${student.studentData.course}</td>
</tr>`;

