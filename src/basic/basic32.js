/* 
	Напишите функцию matrixMultiplication(A, B), выполняющую перемножение матриц А и В.
*/

export function matrixMultiplication(A, B) {
if (!Array.isArray(A) || !Array.isArray(B) || A.length === 0 || B.length === 0) return [];
const rowsA = A.length;
const colsA = A[0].length;
const rowsB = B.length;
const colsB = B[0].length;
if (colsA !== rowsB) {
throw new Error('Несовместимые размеры матриц для умножения');
}
return Array.from({ length: rowsA }, (_, i) =>
Array.from({ length: colsB }, (_, j) =>
A[i].reduce((sum, val, k) => sum + val * B[k][j], 0)));
};

