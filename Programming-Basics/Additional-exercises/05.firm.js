function solve(input) {
  const neededHours = Number(input[0]);
  const daysTheseFirmHave = Number(input[1]);
  const numOfWorkersWhoWorksExtraordinary = Number(input[2]);

 let hoursLeftForWorkingAfterTraining = (daysTheseFirmHave * 0.9) * 8;
  let extraordinaryHours = numOfWorkersWhoWorksExtraordinary * 2 * daysTheseFirmHave;
  let totalTime = Math.floor(
    hoursLeftForWorkingAfterTraining + extraordinaryHours
  );
  let difference = 0;
  if (totalTime >= neededHours) {
    difference = Math.abs(neededHours - totalTime);
    console.log(`Yes!${Math.floor(difference)} hours left.`);
  } else {
    difference = Math.abs(neededHours - totalTime);
    console.log(`Not enough time!${Math.floor(difference)} hours needed.`);
  }
}
solve(["50", "5", "2"]);
