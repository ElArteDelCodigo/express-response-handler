import { BaseError } from './BaseError'
import { ErrorType, ErrorCode, ErrorMessage } from '../constants'

export class BadRequestError extends BaseError {
  constructor(msg: string = ErrorMessage.BAD_REQUEST, err?: unknown) {
    super({
      code: ErrorCode.BAD_REQUEST,
      type: ErrorType.BAD_REQUEST,
      message: msg,
      error: err,
    })
  }
}
