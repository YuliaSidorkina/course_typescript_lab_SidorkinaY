/* 	
	Создайте конструктор класса Product, который принимает название и цену товара. Цена должна быть неотрицательной. Если введена отрицательная цена, то установите 0.
*/

export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price < 0 ? 0 : price;
  }
}
