/* 		
	Класс Square должен сохранять сигнатуру метода setSize класса Rectangle, при этом стороны квадрата должны быть равны (выбрать наибольшую сторону)
*/

export class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setSize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  get area(): number {
    return this.width * this.height;
  }
}

export class Square extends Rectangle {
  constructor(size: number) {
    super(size, size);
  }

  override setSize(width: number, height: number): void {
    const maxSide = Math.max(width, height);
    this.width = maxSide;
    this.height = maxSide;
  }
}
