/* 
	Реализовать функцию all, которая принимает массив и функцию-callback. Callback принимает один элемент массива и возвращает true или false. Функция all должна вернуть true, если все элементы массива вернули true в callback. Нельзя использовать метод массивов every.
*/

export function all(arr, callback) {
if (!Array.isArray(arr)) throw new TypeError('Первый аргумент должен быть массивом');
  if (typeof callback !== 'function') throw new TypeError('Второй аргумент должен быть функцией');
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) return false;
  }
  return true;
}

