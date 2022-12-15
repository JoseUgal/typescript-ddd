export class InvalidArgumentError {
  constructor(message?: string) {
    return Error(message);
  }
}
