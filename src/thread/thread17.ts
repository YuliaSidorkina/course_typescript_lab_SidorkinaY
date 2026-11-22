/* 
	Дописать функцию fetchUserWithRetry, которая пытается получить пользователя 3 раза перед тем как сдаться.
*/
import { fetchUser, type User } from "./promises";

export function fetchUserWithRetry(id: number, maxAttempts = 3): Promise<User> {
  let lastError: Error | null = null;

  return new Promise((resolve, reject) => {
    const attempt = (currentAttempt: number) => {
      fetchUser(id)
        .then(resolve)
        .catch((error) => {
          lastError = error;
          if (currentAttempt < maxAttempts) {
            // Можно добавить небольшую задержку, если нужно:
            // setTimeout(() => attempt(currentAttempt + 1), 1000);
            attempt(currentAttempt + 1);
          } else {
            reject(lastError);
          }
        });
    };

    attempt(1);
  });
}

