/* 
	Функция add должна добавлять переданное значение к предыдущему значению, но она работает некорректно. Почему? Исправьте ее.
*/

const calculator = {
  previousValue: 0,
  add(value: number): number {
    this.previousValue += value;
    return this.previousValue;
  },
};

export function add(value: number): number {
  const adder = calculator.add.bind(calculator);
  return adder(value);
}

