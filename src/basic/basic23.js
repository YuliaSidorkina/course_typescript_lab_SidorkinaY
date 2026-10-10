/* 
	Напишите функцию strip_special_chars(text), которая удаляет из текста все специальные символы и оставляет только буквы и пробелы.
	Подсказка: для проверки символа можно использовать константу 
	const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
*/

export function strip_special_chars(text) {
if (typeof text !== 'string') {
    throw new TypeError('Входной параметр должен быть строкой');
  }
  const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (allowed.includes(char)) {
     result += char;
    }
  }
  return result;
}
