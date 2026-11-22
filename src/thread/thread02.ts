/* 
	Допишите функцию парсинга JSON, чтобы она возвращала null при некорректном JSON и логировала ошибку.
*/

export function parseJsonSafely(jsonString: string): any | null {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Ошибка парсинга JSON:', error);
    return null;
  }
}

