/* 
	Напишите функцию swap_first_last(arr), меняющую местами первый и последний элемент массива. Функция не должна использовать функции высших порядков и оператор ..., также она не должна изменять исходный массив, можно использовать циклы while или for.
*/

export function swap_first_last(arr) {
if (arr.length <= 1) {
    const copy = [];
    let i = 0;
    while (i < arr.length) {
      copy.push(arr[i]);
      i++;
    }
    return copy;
  }  
  const result = [];
  let i = 0;
while (i < arr.length) {
result.push(arr[i]);
i++;
}
const temp = result[0];
result[0] = result[result.length - 1];
result[result.length - 1] = temp;
return result;
}
