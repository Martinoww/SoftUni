function solve(input) {
  const numOfRestDays = Number(input[0]);
  let numOfWorkingDays = 365 - numOfRestDays;
  let timeForPlaying = numOfWorkingDays * 63 + numOfRestDays * 127;
  let maximumTimeForPlayingInOneYear = 30000;
  let difference = maximumTimeForPlayingInOneYear - timeForPlaying;
  let hourDiff = Math.abs(difference / 60);
  let minDiff = Math.abs(difference % 60);
  if(minDiff >= 60){
      hourDiff += 1
  }

  if (minDiff === 0 && minDiff < 10) {
    minDiff = `0${minDiff}`;
  }
  if (timeForPlaying > maximumTimeForPlayingInOneYear) {
    console.log(`Tom will run away`);
    console.log(`${Math.floor(hourDiff)} hours and ${minDiff} minutes more for play`);
  } else {
    console.log(`Tom sleeps well`);
    console.log(`${Math.floor(hourDiff)} hours and ${minDiff} minutes less for play`);
  }
}
solve(["20"]);
