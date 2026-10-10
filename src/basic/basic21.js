/* 	
	Напишите функцию capitalize_words(sentence), которая принимает предложение и возвращает его, преобразовав первую букву каждого слова в заглавную.
	Подсказка: разбить предложение на слова можно с помощью метода split, соединить слова с помощью метода join. Для обработки массива слов используйте цикл.
*/

export function capitalize_words(sentence) {
if (typeof sentence !== 'string') {
throw new TypeError('Входной параметр должен быть строкой');
  }
  const words = sentence.split(' ');
  const capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length === 0) {
    capitalizedWords.push(word);
    continue;
    }
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    capitalizedWords.push(firstLetter + restOfWord);
  }

  return capitalizedWords.join(' ');
}
