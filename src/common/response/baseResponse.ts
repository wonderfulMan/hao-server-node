export class BaseResponse<T> {
  public readonly code: number;
  public readonly message: string;
  public readonly data?: T;

  constructor(code: number, message: string, data?: T) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
