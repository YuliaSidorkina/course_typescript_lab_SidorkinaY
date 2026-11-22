
export class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

export class Student extends Person {
  public group: string;

  constructor(name: string, age: number, group: string) {
    super(name, age);
    this.group = group;
  }
}

