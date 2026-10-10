/* 
	Реализуйте функцию removeDuplicates(arr), которая удаляет повторяющиеся элементы из массива с помощью методов indexOf и push.
*/

export function removeDuplicates(arr) {
if (!Array.isArray(arr)) {
    throw new TypeError('Входной параметр должен быть массивом');
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (result.indexOf(current) === -1) {
     result.push(current);
    }
  }
  return result;
}

