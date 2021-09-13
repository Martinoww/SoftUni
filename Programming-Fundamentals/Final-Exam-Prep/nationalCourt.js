function nationalCourt(firstEmpl, secondEmpl, thirdEmpl, totalPeople) {
  let peopleAnswerd = 0;

  for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {
    if (i % 4 === 0) {
      continue;
    } else {
      peopleAnswerd += firstEmpl + secondEmpl + thirdEmpl;
    }
    if (peopleAnswerd >= totalPeople) {
      console.log(`Time needed: ${i}h.`);
      break;
    }
  }
}
nationalCourt(3, 2, 5, 40);
