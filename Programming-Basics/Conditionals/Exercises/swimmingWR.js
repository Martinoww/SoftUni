function solve(input) {
  let recordInSec = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeInSecondsForMeterSwam = Number(input[2]);
  let secondsAdded = Math.floor(distanceInMeters / 15) * 12.5;
  let swimmingTime =
    distanceInMeters * timeInSecondsForMeterSwam + secondsAdded;
  if (swimmingTime >= recordInSec) {
    let secondsSlower = swimmingTime - recordInSec;
    console.log(`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`);
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${swimmingTime.toFixed(2)} seconds.`
    );
  }
}
solve(["10464", "1500", "20"]);
