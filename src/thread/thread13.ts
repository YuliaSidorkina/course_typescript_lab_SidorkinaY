/* 
	Дописать функцию getSafeUserSettings, которая возвращает настройки по умолчанию { theme: "light" } при ошибке.
*/

import { fetchUserSettings } from "./promises";

export async function getSafeUserSettings(id: number): Promise<{ theme: string }> {
  try {
    return await fetchUserSettings(id);
  } catch {
    return { theme: "light" };
  }
}
