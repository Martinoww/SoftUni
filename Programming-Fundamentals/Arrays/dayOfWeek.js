function dayOfWeek(day) {
  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (day >= 1 && day <= 7) {
    console.log(week[day - 1]);
  } else {
    console.log(`Invalid day!`);
  }
}
dayOfWeek(-1);
console.log(`----`);
dayOfWeek(0);
console.log(`----`);
dayOfWeek(1);
console.log(`----`);
dayOfWeek(2);
console.log(`----`);
dayOfWeek(3);
console.log(`----`);
dayOfWeek(4);
console.log(`----`);
dayOfWeek(5);
console.log(`----`);
dayOfWeek(6);
console.log(`----`);
dayOfWeek(7);
console.log(`----`);
dayOfWeek(8);
