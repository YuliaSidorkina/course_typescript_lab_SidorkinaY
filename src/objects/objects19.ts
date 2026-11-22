/* 
	Реализовать метод withTaxRate в объекте product, который возвращает новый объект, такого же типа как и исходный, но с добавленным полем taxAmount, равным произведению price и taxRate.
*/

export const product = {
  price: 100,
  withTaxRate(rate: number) {
    const result = { ...this };

    result.taxAmount = this.price * rate;

    return result;
  },
};

