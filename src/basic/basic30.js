/* 
	Реализуйте функцию extractUniqueValues(arr1, arr2), которая берет уникальные элементы первого массива и помещает их в конец второго массива с помощью методов indexOf и push.
*/

export function extractUniqueValues(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Оба аргумента должны быть массивами');
  }
  const result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i];
    if (result.indexOf(current) === -1) {
    result.push(current);
    }
  }
  return result;
}

