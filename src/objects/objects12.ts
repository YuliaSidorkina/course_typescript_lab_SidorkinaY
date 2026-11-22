/* 
	Функция add должна добавлять переданное значение к предыдущему значению, но она работает некорректно. Почему? Исправьте ошибку.
*/

const calculator = {
  previousValue: 0,
  add(value: number): number {
    this.previousValue += value;
    return this.previousValue;
  },
};

export function add(value: number): number {
  return calculator.add(value);
}

