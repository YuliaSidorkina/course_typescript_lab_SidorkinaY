/* 
	Реализуйте функцию is_prime(n), которая проверяет, является ли число n простым. Простое число — это натуральное число больше единицы, которое делится только на 1 и само себя. Функция должна использовать цикл while.
*/

export function is_prime(n) {
if (n <= 1) return false;
if (n === 2) return true;
if (n % 2 === 0) return false; 
let divisor = 3;
while (divisor * divisor <= n) {
if (n % divisor === 0) {
return false;
}
divisor += 2;
}
return true;
}

