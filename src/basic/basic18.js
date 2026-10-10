/* 
	Напишите функцию second_largest(arr), находящую второе максимальное значение в массиве. Если такого элемента нет - вернуть null. Функцию сортировки использовать нельзя, можно использовать циклы while или for.
*/
export function second_largest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
  return null;
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (typeof num !== 'number' || Number.isNaN(num)) {
      continue;
    }
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
}