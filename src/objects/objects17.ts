/* 
	Реализовать функцию removeField<T, K extends keyof T>(obj: T, field: K): Omit<T, K>, которая удаляет поле из объекта.
*/
export function removeField<T, K extends keyof T>(obj: T, field: K): Omit<T, K> {
  const result = { ...obj };
  delete result[field];
  return result as Omit<T, K>;
}

