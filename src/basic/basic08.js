/* 
	Реализовать функцию sum_digits(num), которая суммирует цифры целого положительного числа num. Например, sum_digits(1234) вернёт 1 + 2 + 3 + 4 = 10. Функция должна использовать цикл while и не должна использовать преобразования числа в строку.
*/

export function sum_digits(num) {
if (typeof num !== 'number' || num < 1 || !Number.isInteger(num)) {
throw new Error("Число должно быть положительным и целым");
}
let sum = 0;
let temp = num;
while (temp > 0) {
sum += temp % 10;
temp = Math.floor(temp / 10);
}
return sum;
}

