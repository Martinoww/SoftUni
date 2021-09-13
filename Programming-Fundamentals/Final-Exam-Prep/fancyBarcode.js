function solve(input) {
  let n = Number(input.shift());
  let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
  let digitPattern = /\d+/g;
  for (let i = 0; i < n; i++) {
    let text = input[i];
    let match = pattern.exec(text);
    if (match != null) {
      let digits = text.match(digitPattern);
      if (digits != null) {
        console.log(`Product group: ${digits.join("")}`);
      } else {
        console.log(`Product group: 00`);
      }
    } else {
      console.log(`Invalid barcode`);
    }
  }
}
solve([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
