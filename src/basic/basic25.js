/* 
	Реализуйте функцию removeFirstOccurrence(arr, value), которая удаляет первое вхождение указанного элемента из массива
*/

export function removeFirstOccurrence (arr, value) {
 if (!Array.isArray(arr)) {
  throw new TypeError('Первый аргумент должен быть массивом');
  }
  const result = [];
  let removed = false; // флаг: уже удалили ли первое вхождение
  for (let i = 0; i < arr.length; i++) {
    if (!removed && arr[i] === value) {
      removed = true;
      continue;
    }
    result.push(arr[i]);
  }
  return result;
}
