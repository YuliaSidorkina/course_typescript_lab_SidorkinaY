/* 
	Напишите функцию remove_duplicates(arr), удаляющую дублирующиеся значения из массива, сохраняя порядок остальных элементов.
	Подсказка: можно использовать функцию includes.
*/
export function remove_duplicates(arr) {
const uniquearr = []; 
for (let i = 0; i < arr.length; i++) {
if (!uniquearr.includes(arr[i])) {
uniquearr.push(arr[i]);
}
}
return uniquearr;
}
