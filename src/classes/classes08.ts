/*   
  Дан исходный класса Animal. Необходимо добавить статическое свойство animalCount, которое учитывает количество созданных животных, и статический метод getAnimalCount, возвращающий это значение.
*/

export class Animal {
  static animalCount = 0; // Статическое свойство для подсчёта всех животных

  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
    Animal.animalCount++; // Увеличиваем счётчик при каждом создании экземпляра
  }

  greet() {
    console.log(
      `Привет, меня зовут ${this.name}! Я представитель вида ${this.species}.`
    );
  }

  static getAnimalCount(): number {
    return Animal.animalCount;
  }
}


