import validate from 'uuid-validate';
import { InvalidArgumentError } from './InvalidArgumentError';
import { v4 as uuid } from 'uuid';

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsValidUuid(value);
    this.value = value;
  }

  static random(): Uuid {
    return new Uuid(uuid());
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
  }

  toString(): string {
    return this.value;
  }
}
