/* 
	Реализуйте функцию sum_positive(arr), которая складывает положительные элементы массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function sum_positive(arr) {
	if (!Array.isArray(arr)) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (typeof num === 'number' && !Number.isNaN(num) && num > 0) {
      sum += num;
    }
  }
  return sum;
}


