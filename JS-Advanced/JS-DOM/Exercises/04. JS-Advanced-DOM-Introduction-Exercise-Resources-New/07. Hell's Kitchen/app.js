function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputText = document.querySelector('#inputs textarea').value;
      inputText = JSON.parse(inputText);
      let restaurantCatalogue = {};
       for(let line of inputText){
         let [restaurantName, restOfString] = line.split(' - ');
         let workerData = restOfString.split(', ');
         for(let data of workerData){
            let [workerName, salary] = data.split(' ');
            if(restaurantCatalogue[restaurantName] === undefined){
               restaurantCatalogue[restaurantName] = {'employees':{},'total':0,'averageSalary':0,};
            }
               restaurantCatalogue[restaurantName].employees[workerName] = Number(salary);
         }
         restaurantCatalogue[restaurantName].total = Object.values(restaurantCatalogue[restaurantName].employees).reduce((acc,val) => acc + val,0);
         restaurantCatalogue[restaurantName].averageSalary = Number(restaurantCatalogue[restaurantName].total / Object.keys(restaurantCatalogue[restaurantName].employees).length);
       }
       let sortedRestaurants = Object.entries(restaurantCatalogue).sort((a, b) => {
        return b[1].averageSalary - a[1].averageSalary;
       })
       let bestRastaurant = sortedRestaurants[0];
       let sortedEmployees = Object.entries(bestRastaurant[1].employees).sort((a, b) => {
          return b[1] - a[1];
       })
       let bestSalary = sortedEmployees[0][1];
       let restaurantResultString = `Name: ${bestRastaurant[0]} Average Salary: ${bestRastaurant[1].averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
       let employeesResultString = ``;
       for(let [name, personSalary] of sortedEmployees){
          employeesResultString += `Name: ${name} With Salary: ${personSalary} `
       }
      document.querySelector('#bestRestaurant p').textContent = restaurantResultString;
      document.querySelector('#workers p').textContent = employeesResultString;
   }
}