/* 
	Реализовать функцию updateField, которая принимает объект и ключ (имя поля) и возвращает новый объект с измененным значением поля. Если поля с таким именем нет, то его нужно добавить.
*/

export function updateField<T extends object, K extends PropertyKey>(
  obj: T,
  field: K,
  value: unknown
): T & Record<K, unknown> {

  const result = { ...obj };

  (result as Record<K, unknown>)[field] = value;
  
  return result as T & Record<K, unknown>;
}


