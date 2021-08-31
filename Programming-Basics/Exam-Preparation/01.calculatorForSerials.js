function solve(input) {
  let nameOfSeries = input[0];
  let seasons = Number(input[1]);
  let episodes = Number(input[2]);
  let durationOfOneEpisode = Number(input[3]);
  let adsDurration = durationOfOneEpisode * 0.2;
  let totalDurrationForOneEpisodeWithAds = adsDurration + durationOfOneEpisode;
  let addedTimeForEndOfSeason = seasons * 10;
  let totalTimeNeeded = totalDurrationForOneEpisodeWithAds * seasons * episodes + addedTimeForEndOfSeason
  console.log(`Total time needed to watch the ${nameOfSeries} series is ${Math.floor(totalTimeNeeded)} minutes.`);
}
solve(['Game of Thrones',
    '7',
    '10',
    '50',]);
