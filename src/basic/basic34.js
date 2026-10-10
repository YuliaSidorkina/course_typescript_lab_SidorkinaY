/* 
	Напишите функцию isSymmetric(matrix), проверяющую, симметрична ли матрица относительно главной диагонали. Подсказка: главная диагональ матрицы  — это диагональ, проходящая по элементам матрицы, у которых номер строки и номер столбца одинаковы.
*/

export function isSymmetric(matrix) {
  if (!Array.isArray(matrix)) return false;
  const n = matrix.length;
  if (n === 0) return true;
  for (let i = 0; i < n; i++) {
    if (!Array.isArray(matrix[i]) || matrix[i].length !== n) return false;
    for (let j = i + 1; j < n; j++) {
    if (matrix[i][j] !== matrix[j][i]) return false;
    }
  }
  return true;
}



