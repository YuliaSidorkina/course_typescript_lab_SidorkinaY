/* 
	Реализуйте функцию zeroRowColumn(matrix, row, col), которая превращает в ноль всю строку и весь столбец матрицы, соответствующие указанным индексам.
*/

export function zeroRowColumn(matrix, row, col) {
if (!Array.isArray(matrix) || matrix.length === 0) {
return [];
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  if (row < 0 || row >= rows || col < 0 || col >= cols) {
    throw new Error('Индексы строки или столбца выходят за границы матрицы');
  }
  const result = matrix.map(r => r.slice());
  for (let c = 0; c < cols; c++) {
    result[row][c] = 0;
  }
  for (let r = 0; r < rows; r++) {
    result[r][col] = 0;
  }
  return result;
}
