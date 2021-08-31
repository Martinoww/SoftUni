function solve() {
  let hours = 0;
  let mins = 0;
  let sec = 0;
  let n = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (sec >= 60) {
      sec = 0;
      mins++;
    }
    if (mins >= 60) {
      mins = 0;
      hours++;
    }
    if (hours >= 24) {
      break;
    }
    console.log(`${hours} : ${mins} : ${sec}`);
    sec++;
  }
}
solve();
