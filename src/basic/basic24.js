/* 
	Напишите функцию replace_word(sentence, old_word, new_word), заменяющую старое слово новым словом в предложении.
*/

export function replace_word(sentence, old_word, new_word) {
if (typeof sentence !== 'string' || typeof old_word !== 'string' || typeof new_word !== 'string') {
    throw new TypeError('Все аргументы должны быть строками');
  }
  if (old_word === '') {
    return sentence;
  }
  const words = sentence.split(' ');
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === old_word) {
      result.push(new_word);
    } else {
    result.push(words[i]);
    }
  }
  return result.join(' ');
}