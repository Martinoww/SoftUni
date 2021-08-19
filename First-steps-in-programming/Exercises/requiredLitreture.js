// INPUT:
//	Брой страници в текущата книга – цяло число в интервала [1…1000];
//	Страници, които може да прочита за 1 час – цяло число в интервала [1…1000];
//	Броя на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000];
//Explanations :
// изчисляваме общото време за четене на книгата: 212 / 20 = 10.6 часа
// получения резултат делим на броя дни, за да получим необходимите часове на ден: 10.6 часа / 2 дни = 5.3 часа на ден
function solve(input) {
//Taking the input:
const numberOfPages = Number(input[0]);
const readPagesForOneHour = Number(input[1]);
const neededDaysForReading = Number(input[2]);
//Solving:
const totalTimeForReadingBook = numberOfPages / readPagesForOneHour;
const totalNeededHours = totalTimeForReadingBook / neededDaysForReading;
console.log(totalNeededHours); 


}
solve(["212", "20", "2"]);
solve(["432", "15", "4"]);
