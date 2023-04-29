import { BaseError } from './BaseError'
import { ErrorType, ErrorCode, ErrorMessage } from '../constants'

export class UnauthorizedError extends BaseError {
  constructor(msg: string = ErrorMessage.UNAUTHORIZED, err?: unknown) {
    super({
      code: ErrorCode.UNAUTHORIZED,
      type: ErrorType.UNAUTHORIZED,
      message: msg,
      error: err,
    })
  }
}
