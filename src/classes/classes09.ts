/* 	
	В классе Product нужно добавить статическое свойство discountRate, указывающее скидку на товары, и статический метод applyDiscount, применяющий скидку ко всей продукции.
*/

export class Product {
  static discountRate: number = 0; // Статическое свойство: скидка в долях (например, 0.1 = 10%)

  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  describe() {
    console.log(`Продукт: ${this.name}, цена: ${this.price.toFixed(2)}`);
  }

  static applyDiscount(products: Product[]): void {
    if (Product.discountRate === 0) {
      return; // Если скидка 0, ничего не делаем
    }

    for (const product of products) {
      product.price = product.price * (1 - Product.discountRate);
    }
  }
}

