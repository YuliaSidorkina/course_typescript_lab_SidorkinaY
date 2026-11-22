/* 
	Класс Task, позволяющий создать задачу либо простым текстом («Купить хлеб»), либо путем передачи названия и статуса.
*/


export class Task {
  title: string;
  done: boolean;

  constructor(title: string);
  constructor(title: string, done: boolean);

  constructor(title: string, done?: boolean) {
    this.title = title;
    this.done = done ?? false;
  }
}