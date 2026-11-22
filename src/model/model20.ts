/* 
	Примените обе примеси к классу FormData и реализуйте функционал сериализации и валидации создав класс EnhancedFormData
*/
export function Serializable<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {
    serialize(): string {
      return JSON.stringify(this);
    }
  };
}

export function Validatable<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {
    validate(): boolean {
      return true;
    }
  };
}

export class FormData {
  fields: Record<string, string> = {};

  setField(name: string, value: string): void {
    this.fields[name] = value;
  }
}
export class EnhancedFormData extends Serializable(Validatable(FormData)) {}
