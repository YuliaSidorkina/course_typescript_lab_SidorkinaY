/* 
	Дописать функцию getAllUserInfo, которая возвращает результаты всех запросов независимо от их успешности.
*/
import { fetchUser, fetchUserData, fetchUserPosts, fetchUserSettings } from "./promises";
import { PromiseSettledResult } from "typescript"; // тип уже встроен, импорт не нужен

export function getAllUserInfo(id: number): Promise<Array<PromiseSettledResult<any>>> {
  return Promise.allSettled([
    fetchUser(id),
    fetchUserData(id),
    fetchUserPosts(id),
    fetchUserSettings(id),
  ]);
}

