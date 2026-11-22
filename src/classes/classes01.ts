/* 
	Напишите конструктор класса Person, который принимает три аргумента: имя, фамилию и возраст. Используйте модульность доступа (модификаторы доступа public, private) для соответствующих полей.
*/

export class Person {
  private _age: number; 
  private _surname: string; 

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this._surname = surname;
    this._age = age;
  }

  getFullName() {
    return `${this.name} ${this._surname}`;
  }

  isAdult() {
    return this._age >= 18;
  }
}
