function solve() {
  let input = document.getElementById("input").value;
  let splited = input.split(".");
  splited = splited.filter((x) => x.length > 0);
  let finalResult = ``;
  let result = ``;

  for (let i = 0; i < splited.length; i++) {
    if (i == splited.length - 1) {
      result += splited[i] + ".";
      finalResult += `<p>${result}</p>`;
    } else if (i === 0) {
      result += splited[i] + ". ";
    } else if ((i + 1) % 3 === 0) {
      result += splited[i] + ". ";
      finalResult += `<p>${result}</p>`;
      result = ``;
    } else {
      result += splited[i] + ". ";
    }
  }
  document.getElementById("output").innerHTML = finalResult;
}
