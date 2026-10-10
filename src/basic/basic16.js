/* 
	Реализуйте функцию reverse_list(arr), которая переворачивает порядок элементов массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function reverse_list(arr) {
if (!Array.isArray(arr)) {
throw new TypeError('Входной параметр должен быть массивом');
}
let left = 0;
let right = arr.length - 1;
while (left < right) {
const temp = arr[left];
arr[left] = arr[right];
arr[right] = temp;
left++;
right--;
}
return arr;
}
