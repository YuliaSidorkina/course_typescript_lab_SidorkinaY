/* 
	Напишите функцию concatenate_strings(arr), объединяющую строки из массива в одну длинную строку. Функция не должна использовать функции высших порядков и оператор ..., можно использовать циклы while или for.
*/

export function concatenate_strings(arr) {
	if (!Array.isArray(arr)) {
    return '';
  }
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === 'string') {
      result += element;
    }
  }
  return result;
}
