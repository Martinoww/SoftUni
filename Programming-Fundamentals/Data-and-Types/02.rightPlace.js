function rightPlace(firstString, char, secondString) {
  let newString = "";
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] == "_") {
      newString += char;
      continue;
    }
    newString += firstString[i];
  }
  if (newString == secondString) {
    console.log(`Matched`);
  } else {
    console.log(`Not Matched`);
  }
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
