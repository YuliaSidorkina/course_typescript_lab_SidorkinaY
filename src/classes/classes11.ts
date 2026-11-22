/* 	Реализовать параметризованный класс для хранения коллекции элементов. Класс должен содержит методы add, remove и contains. На параметр класса накладывается ограничение, объекты класса должны содержать метод equals другого объекта класса. Нужно реализовать метод count, который подсчитывает количество элементов в коллекции, равных заданному.
*/

class Collection {
  constructor(...items) {
    this.items = items;
  }
  
  add(item) {
    this.items.push(item);
  }

  remove(item) {
    this.items = this.items.filter(i => !i.equals(item));
  }

  contains(item) {
    return this.items.some(i => i.equals(item));
  }

  count(item) {
    return this.items.reduce((acc, current) => acc + (current.equals(item) ? 1 : 0), 0);
  }
}

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  equals(other) {
    return this.id === other.id;
  }
}

const users = new Collection(
  new User(1, "Alice"),
  new User(2, "Bob"),
  new User(1, "Alice Updated")
);

console.log(users.count(new User(1, "Any Name"))); // 2
console.log(users.count(new User(3, "Charlie")));  // 0

