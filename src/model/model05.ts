/* 
	Добавьте свойство discountPercentage в класс DiscountedProduct, реализуйте контруктор этого класса.
*/

export class Product {
  price: number;
  
  constructor(price: number) {
    this.price = price;
  }
}
export class DiscountedProduct extends Product {
  discountPercentage: number;

  constructor(price: number, discountPercentage: number) {
    super(price);
    if (discountPercentage < 0 || discountPercentage > 100) {
      throw new Error("discountPercentage must be between 0 and 100");
    }
    
    this.discountPercentage = discountPercentage;
  }

  getDiscountedPrice(): number {
    return this.price * (1 - this.discountPercentage / 100);
  }
}

