/* 
	Реализуйте функцию transposeMatrix(matrix), которая транспонирует матрицу (меняет строки и столбцы местами).
*/

export function transposeMatrix(matrix) {	
	if (!Array.isArray(matrix)) {
    throw new TypeError('Входной параметр должен быть массивом');
  }
  const rows = matrix.length;
  if (rows === 0) {
    return [];
  }
  const cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    if (!Array.isArray(matrix[i])) {
    throw new TypeError(`Элемент матрицы по индексу ${i} должен быть массивом`);
    }
    if (matrix[i].length !== cols) {
    throw new Error('Все строки матрицы должны иметь одинаковую длину');
    }
  }
  const transposed = [];
  for (let c = 0; c < cols; c++) {
    const newRow = [];
    for (let r = 0; r < rows; r++) {
      newRow.push(matrix[r][c]);
    }
    transposed.push(newRow);
  }
  return transposed;
}
