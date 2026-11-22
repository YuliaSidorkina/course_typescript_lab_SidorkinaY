/* 
	Дописать функцию getUserPostsWithAuthor, которая получает посты пользователя, а затем информацию об авторе каждого поста.
*/

import { fetchUser, fetchUserPosts, type Post } from "./promises";
import type { User } from "./thread07";

export function getUserPostsWithAuthor(
  userId: number
): Promise<Array<Post & { author: User }>> {
  return fetchUserPosts(userId)
    .then((posts) =>
      Promise.all(
        posts.map((post) =>
          fetchUser(post.userId).then((author) => ({ ...post, author }))
        )
      )
    );
}

