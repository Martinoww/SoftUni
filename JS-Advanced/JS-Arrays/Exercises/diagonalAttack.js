function diagonalAttack(matrix) {

    for (let i = 0; i < matrix.length; i++) {
      matrix[i] = matrix[i].split(' ').map(Number)
    }
  
    let firstDiagonalSum = 0, secondDiagonalSum = 0;
  
    let v = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++) {
      firstDiagonalSum += matrix[i][i];
      secondDiagonalSum += matrix[i][v];
      v--;
    }
  
    if (firstDiagonalSum == secondDiagonalSum) {
      v = matrix.length - 1;
      for (let i = 0; i < matrix.length; i++) {
        matrix[i].map((num, index) => {
          if (index !== i && index !== v) { 
            matrix[i][index] = firstDiagonalSum 
        }
        })
        v--;
      }
    }
  
    matrix.forEach(line => console.log(line.join(' ')));
}
diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'10 12 3 21 10',
'10 4 5 2 20',
'5 22 33 11 1']
)
