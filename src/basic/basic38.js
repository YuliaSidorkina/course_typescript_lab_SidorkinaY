/* 
	Реализовать функцию some, которая принимает массив и функцию-callback. Callback принимает один элемент массива и возвращает true или false. Функция some должна вернуть true, если хотя бы один элемент массива вернул true в callback. Нельзя использовать метод массивов some.
*/

export function some(arr, callback) {
	if (!Array.isArray(arr)) {
    throw new TypeError('Первый аргумент должен быть массивом');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('Второй аргумент должен быть функцией');
  }
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}



