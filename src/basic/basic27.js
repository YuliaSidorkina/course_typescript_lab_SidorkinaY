/* 
	Реализуйте функцию insertAtPosition(arr, pos, elem), которая вставляет новый элемент в указанную позицию массива с помощью методов slice и concat.
*/

export function insertAtPosition(arr, pos, elem) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Первый аргумент должен быть массивом');
  }
  let index = pos;
  if (index < 0) {
  index = Math.max(0, arr.length + index);
  } else if (index > arr.length) {
  index = arr.length;
  }
  const before = arr.slice(0, index);
  const after = arr.slice(index);
  return before.concat(elem, after);
}
