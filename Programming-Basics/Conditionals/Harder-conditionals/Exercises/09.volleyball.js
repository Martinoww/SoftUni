function solve(input) {
  const typeOfYear = input[0];
  const numOfHolidaysInTheYear = Number(input[1]);
  const numOfWeekendsInTheYearWhichVladiTravel = Number(input[2]);
  let weekendsLeftAfterTraveling = 48 - numOfWeekendsInTheYearWhichVladiTravel;
  let saturdayGamesInSofia = (weekendsLeftAfterTraveling * 3) / 4;
  let gamesDuringHolidayEvents = (numOfHolidaysInTheYear * 2) / 3;
  let totalGamesDuringWeekendsAndHolidayEvents =
    saturdayGamesInSofia +
    numOfWeekendsInTheYearWhichVladiTravel +
    gamesDuringHolidayEvents;

  if (typeOfYear === "leap") {
    totalGamesDuringWeekendsAndHolidayEvents *= 1.15;
    console.log(Math.floor(totalGamesDuringWeekendsAndHolidayEvents));
  } else if (typeOfYear === "normal") {
    console.log(Math.floor(totalGamesDuringWeekendsAndHolidayEvents));
  }
}
solve(["normal", "6", "13"]);
