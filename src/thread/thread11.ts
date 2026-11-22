/* 
	Дописать функцию getUserWithData, которая сначала получает пользователя, затем его данные и возвращает объект { user: User, data: User }.
*/

import { fetchUser, fetchUserData, type User } from "./promises";

export function getUserWithData(id: number): Promise<{ user: User; data: User }> {
  return fetchUser(id)
    .then((user) => {
      return fetchUserData(id).then((userData) => ({
        user,
        data: userData,
      }));
    })
    .catch((error) => {
      throw new Error(`Failed to get user with data for id ${id}: ${error.message}`);
    });
}
