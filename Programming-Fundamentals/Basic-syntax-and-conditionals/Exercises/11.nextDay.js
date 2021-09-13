function nextDay(year, month, day) {
  let date = new Date(year, month, day);
  let mainYear = date.getFullYear();
  let mainMonth = date.getMonth();
  let dt = date.getDate() + 1;
if(dt >= 31){
    dt = 1;
    mainMonth++
}
if(mainMonth == 12){
mainMonth = 10
}
  

  console.log(`${mainYear}-${mainMonth}-${dt}`);
}
nextDay(1951,
    12,
    24);
