function solve(arrOfStr){
let restaurants = {};
let counterForAverage = 0;
for(let line of arrOfStr){
let splited = line.split(' - ');
let [restaurantName, workersData] = splited;
let personData = workersData.split(', ');
for(let lineOfData of personData) {
 let [workerName, workerSalary] = lineOfData.split(' ')
 workerSalary = Number(workerSalary);
if(restaurants[restaurantName] == undefined){
    restaurants[restaurantName] = {total: 0, employees:{},};
}else if (restaurants.hasOwnProperty(restaurantName)){
    restaurants[restaurantName] = {total: 0, employees:{},};
// restaurants[restaurantName].employees[workerName] = workerSalary;
// restaurants[restaurantName].total += workerSalary;
}
restaurants[restaurantName].employees[workerName] = workerSalary;
restaurants[restaurantName].total += workerSalary;


}
let numOfWorkers = Object.keys(restaurants[restaurantName].employees).length;
restaurants[restaurantName].averageSalary =  Number((restaurants[restaurantName].total / numOfWorkers).toFixed(2));
}

console.log(restaurants);
}
solve(["PizzaHut - Peter 500, George 300, Mark 800",
"PizzaHut - Bob 1300, Joe 780, Jane 660"]
)