/* 
	Создайте функцию, которая собирает объект из двух массивов: массива ключей и массива значений.
*/

export function fromArrays<K extends string, T>(keys: K[], values: T[]): Record<K, T> {
  const result = {} as Record<K, T>;

  const length = Math.min(keys.length, values.length);

  for (let i = 0; i < length; i++) {
    const key = keys[i];
    if (key !== undefined && i in values) {
      result[key] = values[i];
    }
  }

  return result;
}


