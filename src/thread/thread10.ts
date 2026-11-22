/* 
	Реализовать функцию XXX
*/

export class NestedValidationError extends Error {
  constructor(message: string, public path: string[]) {
    super(message);
    this.name = 'NestedValidationError';
  }
}

export interface Address {
  street: string;
  city: string;
}

export interface Person {
  name: string;
  age: number;
  address: Address;
}

export function validatePerson(person: Person): void {
  if (!person.name || person.name.trim().length === 0) {
    throw new NestedValidationError('Name is required', ['name']);
  }
  if (person.age < 0) {
    throw new NestedValidationError('Age must be at least 0', ['age']);
  }

  if (!person.address.street || person.address.street.trim().length === 0) {
    throw new NestedValidationError('Street is required', ['address', 'street']);
  }

  if (!person.address.city || person.address.city.trim().length === 0) {
    throw new NestedValidationError('City is required', ['address', 'city']);
  }
}

