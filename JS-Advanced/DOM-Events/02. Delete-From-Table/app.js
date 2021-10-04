function deleteByEmail() {
  let input = document.getElementsByName('email')[0];
  let resultLine = document.getElementById('result');
 const rows = Array.from(document.querySelectorAll('tbody tr')).filter(r => r.children[1].textContent === input.value);
  rows.forEach(r => r.remove());

  resultLine.textContent = rows.length > 0 ? 'Deleted.' : 'Not found.'
}