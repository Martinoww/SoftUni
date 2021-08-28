function solve(input) {
  let nameOfWantedBook = input.shift();
  let numOfBooks = 0;
  let nameOfBook = input.shift();
  while (nameOfBook !== "No More Books") {
    if (nameOfBook === nameOfWantedBook) {
      console.log(`You checked ${numOfBooks} books and found it.`);
      break;
    }
    numOfBooks++;
    nameOfBook = input.shift();
  }
  if (nameOfBook === "No More Books") {
    console.log(`The book you search is not here!
You checked ${numOfBooks} books.`);
  }
}
solve([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
