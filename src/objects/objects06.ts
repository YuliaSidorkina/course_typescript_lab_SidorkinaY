/* 	
	В объекте user создать метод equal, который будет проверять структурное равенство объектов. При передачи аргументов метод должен возвращать копию объекта с новыми значениями свойств. 
*/
export type User = {
  name: string;
  age: number;
  role: string[];
  equal: (other: User) => boolean;
};

export const user: User = {
  name: "John",
  age: 30,
  role: ["admin", "user"],
  equal(other: User): boolean {
    if (this.name !== other.name || this.age !== other.age) {
      return false;
    }

    if (this.role.length !== other.role.length) {
      return false;
    }

    return this.role.every((role, index) => role === other.role[index]);
  },
};

