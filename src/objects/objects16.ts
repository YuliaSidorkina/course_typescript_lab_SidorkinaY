/* 
	Реализовать функцию addToCollection<T, K extends string>(obj: Record<K, T[]>, collectionName: K, element: T): Record<K, T[]>, которая добавляет элемент в существующую коллекцию в объекте.
*/

export function addToCollection<T, K extends string>(
    obj: Record<K, T[]>,
    collectionName: K,
    element: T
): Record<K, T[]> {
    const result = { ...obj };

    if (!result[collectionName]) {
        result[collectionName] = [];
    }

    result[collectionName] = [...result[collectionName], element];

    return result;
}


