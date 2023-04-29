import { BaseError } from './BaseError'
import { ErrorType, ErrorCode, ErrorMessage } from '../constants'

export class InvalidTokenError extends BaseError {
  constructor(msg: string = ErrorMessage.INVALID_TOKEN, err?: unknown) {
    super({
      code: ErrorCode.INVALID_TOKEN,
      type: ErrorType.INVALID_TOKEN,
      message: msg,
      error: err,
    })
  }
}
