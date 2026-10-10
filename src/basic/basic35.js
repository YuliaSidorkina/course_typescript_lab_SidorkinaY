/* 
	Реализуйте функцию diagonalSum(matrix), которая вычисляет сумму элементов главной диагонали матрицы.
*/

export function diagonalSum(matrix) {
  if (!Array.isArray(matrix)) return 0;
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (Array.isArray(matrix[i]) && i < matrix[i].length) {
    sum += matrix[i][i];
    }
  }
  return sum;
}

