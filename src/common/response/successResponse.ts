import { BaseResponse } from './baseResponse';

export class SuccessResponse<T> extends BaseResponse<T> {
  public readonly code: number;
  public readonly message: string;
  public readonly data?: T;

  constructor(message: string, data?: T, code?: number) {
    super(code || 0, message, data || null);
  }
}
