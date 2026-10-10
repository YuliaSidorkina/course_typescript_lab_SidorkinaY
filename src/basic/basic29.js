/* 
	Реализуйте функцию rotateArrayLeft(arr), которая сдвигает элементы массива влево на одну позицию с помощью методов shift и push. Предусмотрти случай, когда массив пустой.
*/

export function rotateArrayLeft(arr) {
 if (!Array.isArray(arr)) {
    throw new TypeError('Входной параметр должен быть массивом');
  }
  if (arr.length <= 1) {
    return arr.slice(); 
  }
  const result = arr.slice();       
  const firstElement = result.shift(); 
  result.push(firstElement);
  return result;
}
