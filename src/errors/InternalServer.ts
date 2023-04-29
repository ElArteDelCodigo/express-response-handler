import { BaseError } from './BaseError'
import { ErrorType, ErrorCode, ErrorMessage } from '../constants'

export class InternalServerError extends BaseError {
  constructor(err: unknown, msg = ErrorMessage.INTERNAL_SERVER_ERROR) {
    super({
      code: ErrorCode.INTERNAL_SERVER_ERROR,
      type: ErrorType.INTERNAL_SERVER_ERROR,
      message: msg,
      error: err,
    })
  }
}
