/* 
	Реализовать метод uppercaseProfileNames в объекте user, который возвращает новый объект, такого же типа как и исходный, но со значением name в верхнем регистре.
*/

export const user = {
  profile: { name: 'Alice', age: 30 },
  uppercaseProfileNames() {
    const result = { ...this };

    result.profile = { ...result.profile };

    result.profile.name = result.profile.name.toUpperCase();

    return result;
  },
};
