/* 
	Создать класс Point, который принимает координаты точки либо отдельно (по оси X и Y), либо сразу массивом координат [X,Y,Z].
*/

export class Point {
  coords: number[];

  
  constructor(x: number, y: number);
  constructor(coords: [number, number] | [number, number, number]);
  
  
  constructor(...args: any[]) {
    if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
      const x = args[0];
      const y = args[1];
      this.coords = [x, y];
    } else if (args.length === 1 && Array.isArray(args[0])) {
      const input = args[0] as [number, number] | [number, number, number];
      if (input.length === 2 || input.length === 3) {
        this.coords = [...input];
      } else {
        throw new Error('Массив координат должен содержать 2 или 3 числа.');
      }
    } else {
      throw new Error('Неверный формат аргументов. Используйте new Point(x, y) или new Point([x, y]) / new Point([x, y, z]).');
    }
  }

  get x(): number {
    return this.coords[0];
  }

  get y(): number {
    return this.coords[1];
  }

  get z(): number | undefined {
    return this.coords.length >= 3 ? this.coords[2] : undefined;
  }
}