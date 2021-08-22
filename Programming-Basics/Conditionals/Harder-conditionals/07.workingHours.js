function solve(input) {
  let hour = Number(input[0]);
  let dayOfTheWeek = input[1];
  let isValid = hour >= 10 && hour <= 18;

  if (dayOfTheWeek === "Monday") {
    if (isValid) {
      console.log(`open`);
    } else {
      console.log(`closed`);
    }
  } else if (dayOfTheWeek === "Tuesday") {
    if (isValid) {
      console.log(`open`);
    } else {
      console.log(`closed`);
    }
  } else if (dayOfTheWeek === "Wednesday") {
    if (isValid) {
      console.log(`open`);
    } else {
      console.log(`closed`);
    }
  } else if (dayOfTheWeek === "Thursday") {
    if (isValid) {
      console.log(`open`);
    } else {
      console.log(`closed`);
    }
  } else if (dayOfTheWeek === "Friday") {
    if (isValid) {
      console.log(`open`);
    } else {
      console.log(`closed`);
    }
  } else if (dayOfTheWeek === "Saturday") {
    if (isValid) {
      console.log(`open`);
    } else {
      console.log(`closed`);
    }
  }else{
      console.log(`closed`);
  }
}
solve(["11", "Sunday"]);
