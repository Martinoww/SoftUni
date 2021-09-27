function solve(jsonStr) {
  let arr = JSON.parse(jsonStr);
  let outputArr = ["<table>"];
  outputArr.push(makeKeyRow(arr));
  arr.forEach((element) => {
    outputArr.push(makeValueRow(element));
  });
  outputArr.push("</table>");

  function makeKeyRow(arr) {
    let result = "  <tr>";
    Object.keys(arr[0]).forEach((key) => {
      result += `<th>${escapeHtml(key)}</th>`;
    });
    result += "</tr>";
    return result;
  }

  function makeValueRow(element) {
    let result = "  <tr>";
    Object.values(element).forEach((value) => {
      result += `<td>${escapeHtml(value)}</td>`;
    });
    result += "</tr>";
    return result;
  }

  function escapeHtml(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  return outputArr.join("\n");
}
console.log(
  solve(`[{"Name":"Stamat&Georgi",
  "Score":5.5},
 {"Name":"Rumen",
  "Score":6}]`
)
);
/*
        function fromJSONToHTMLTable(input) {
            let arr = JSON.parse(input);
            let outputArr = ['<table>'];
            outputArr.push(makeKeyRow(arr));
            arr.forEach(element => {
                outputArr.push(makeValueRow(element))
            });
            outputArr.push('</table>');
 
            function makeKeyRow(arr) {
                let result = '  <tr>';
                Object.keys(arr[0]).forEach(key => {
                    result += `<th>${escapeHtml(key)}</th>`;
                });
                result += '</tr>';
                return result;
            }
 
            function makeValueRow(element) {
                let result = '  <tr>';
                Object.values(element).forEach(value => {
                    result += `<td>${escapeHtml(value)}</td>`;
                });
                result += '</tr>';
                return result;
            }
 
            function escapeHtml(value) {
                return value
                    .toString()
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
            }
 
            return outputArr.join("\n");
        }
*/
