/* 
	Реализовать функцию map, которая принмает массив и функцию-callback. Функция-callback должна принимать один элемент массива и возвращать новое значение (любого типа). Функция map должна возвращать новый массив с результатами функции-аргумента. Метод массивов map использовать нельзя.
*/

export function map(arr, f) {
 if (!Array.isArray(arr)) {
    throw new TypeError('Первый аргумент должен быть массивом');
  }
  if (typeof f !== 'function') {
    throw new TypeError('Второй аргумент должен быть функцией');
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
  result.push(f(arr[i], i, arr));
  }
  return result;
}


