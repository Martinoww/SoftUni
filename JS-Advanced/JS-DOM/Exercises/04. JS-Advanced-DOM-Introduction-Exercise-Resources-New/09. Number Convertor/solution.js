function solve() {
  document.querySelector("button").addEventListener("click", solution);

  function solution() {
    let select = document.getElementById("selectMenuTo");
    let value = select.options[select.selectedIndex].value;
    let number = document.getElementById("input").value;
    number = Number(number);
    let result;
    if (value === "binary") {
      result = number.toString(2);
    } else if (value === "hexadecimal") {
      result = number.toString(16).toUpperCase();
    }
    document.getElementById("result").value = result;
  }
}
