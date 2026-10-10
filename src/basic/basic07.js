/* 
	Реализовать функцию factorial, использующую цикл while, которая вычисляет факториал числа n. Факториалом числа n называют произведение всех натуральных чисел от 1 до n включительно. Например, factorial(5) равно 1 * 2 * 3 * 4 * 5 = 120.
*/

export function factorial(n){
  if (n < 0) {
    throw new Error("Факториал не определён для отрицательных чисел");
  }
  let result = 1;
  let current = 1;
  while (current <= n) {
    result *= current;
    current++;
  }
  return result;
}
