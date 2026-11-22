/* 
	Реализовать метод move в объекте point, сдвигающий точку на dx и dy.
*/
export const point = {
  x: 0,
  y: 0,
  move(dx: number, dy: number): void {
    this.x += dx;
    this.y += dy;
  },
};


