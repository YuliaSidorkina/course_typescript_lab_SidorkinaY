/* 
	Реализовать функцию filter, которая принмает массив и функцию-callback. Функция-callback должна принмать элемент массива и возвращать true, если элемент должен быть включен в новый массив, и false в противном случае.
	Функция filter должна возвращать новый массив, состоящий из элементов, для которых функция-аргумент возвращает true. Метод массивов filter использовать нельзя.
*/

export function filter(arr, f) {
if (!Array.isArray(arr)) {
    throw new TypeError('Первый аргумент должен быть массивом');
  }
  if (typeof f !== 'function') {
    throw new TypeError('Второй аргумент должен быть функцией');
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}




