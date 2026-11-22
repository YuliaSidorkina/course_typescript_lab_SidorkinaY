/* 
	Допишите функцию асинхронного запроса, чтобы она обрабатывала ошибки и возвращала fallback-значение.
*/

export async function fetchWithFallback(url: string): Promise<string> {
  try {
    const response = await fetch(url);

    if (response.ok === false) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error('Ошибка запроса:', error);
    const message = error instanceof Error ? error.message : String(error);
    return `Error: ${message}`;
  }
}








