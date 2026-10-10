/* 
	Реализовать функцию fibonacci(n), которая возвращает n-е число последовательности Фибоначчи. Последовательность начинается с 0 и 1, каждое следующее число — сумма двух предыдущих. Функция должна использовать цикл while.
*/

export function fibonacci(n) {
if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
throw new Error("n должно быть неотрицательным целым числом");
}
if (n === 0) return 0;
if (n === 1) return 1;
let a = 0;
let b = 1;
let i = 2;
while (i <= n) {
const next = a + b;
a = b;
b = next;
i++;
}
return b;
}
