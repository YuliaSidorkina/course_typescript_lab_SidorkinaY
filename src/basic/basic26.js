/* 
	Реализуйте функцию splitAndMergeStrings(strArr), которая принимает массив строк, разбивает каждую строку пополам, затем соединяет полученные части обратно в один массив. При разбиении строк нечетной длины первая часть должна быть длины на 1 больше второй части. Строки из одно символа не должны разбиваться.
*/

export function splitAndMergeStrings(strArr) {
  if (!Array.isArray(strArr)) {
 throw new TypeError('Входной параметр должен быть массивом');
  }
  const result = [];
  for (let i = 0; i < strArr.length; i++) {
    const str = strArr[i];
    if (typeof str !== 'string') {
      throw new TypeError(`Элемент массива по индексу ${i} должен быть строкой`);
    }
    if (str.length <= 1) {
      result.push(str);
      continue;
    }
    const firstPartLength = Math.ceil(str.length / 2);
    const firstPart = str.slice(0, firstPartLength);
    const secondPart = str.slice(firstPartLength);
    result.push(firstPart, secondPart);
  }
  return result;
}


