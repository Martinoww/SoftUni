window. addEventListener('load', loadStudents)
let tbody = document.querySelector('tbody');
let form = document.querySelector('form')
let url = `http://localhost:3030/jsonstore/collections/students`;
form.addEventListener('submit', makeAStudent);


async function makeAStudent(event){
event.preventDefault();
let formData = new FormData(form);
let firstName = formData.get('firstName');
let lastName = formData.get('lastName');
let grade = formData.get('grade');
grade = Number(grade);
let facultyNumber = formData.get('facultyNumber');
try{
if(firstName == '' || lastName == '' || grade == 0 || Number.isNaN(grade) || facultyNumber == ''){
throw new Error(`All inputs aren't filled or grade is not a number`)
}else {
    let body = {firstName, lastName, facultyNumber, grade};
    let response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });

    if(response.ok == false){
        let err = await response.json();
        throw new Error(err.message);
    }else {
        let data = await response.json();
        form.reset();
        loadStudents()
    }
}
}catch (err){
    alert(err.message);
 }
}

async function loadStudents(){

try {
    let response = await fetch(url);
    if(response.status != 200){
        let err = await response.json();
        throw new Error(err.message);
    }else {
        let data = await response.json();
        let dataValues = Object.values(data);
        dataValues = dataValues.map(createStudentTr);
       tbody.replaceChildren(...dataValues)
    }
} catch (error) {
    alert(error.message);
 }
}

function createStudentTr(dataObj){
let myTr = document.createElement('tr');

let firstNameTd = document.createElement('td');
firstNameTd.textContent = dataObj.firstName;
myTr.appendChild(firstNameTd);

let lastNameTd = document.createElement('td');
lastNameTd.textContent = dataObj.lastName;
myTr.appendChild(lastNameTd);

let facultyNumber  = document.createElement('td');
facultyNumber.textContent = dataObj.facultyNumber;
myTr.appendChild(facultyNumber);

let grade = document.createElement('td');
grade.textContent = dataObj.grade;
myTr.appendChild(grade);

return myTr;
}