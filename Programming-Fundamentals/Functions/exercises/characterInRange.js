function characterInRange(firstSymbol, secondSymbol) {
  let fstSymbAsCode = firstSymbol.charCodeAt(0);
  let scndSymbAsCode = secondSymbol.charCodeAt(0);

  if (fstSymbAsCode > scndSymbAsCode) {
    fstSymbAsCode = scndSymbAsCode;
    scndSymbAsCode = firstSymbol.charCodeAt(0);
  }

  let printLine = "";
  for (let i = fstSymbAsCode + 1; i < scndSymbAsCode; i++) {
    let char = String.fromCharCode(i);
    printLine += char + " ";
  }

  let result = printLine;
  return result;
}
let result = characterInRange("#", ":");
console.log(result);
