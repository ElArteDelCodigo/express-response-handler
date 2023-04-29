import { BaseError } from './BaseError'
import { ErrorType, ErrorCode, ErrorMessage } from '../constants'

export class ForbiddenError extends BaseError {
  constructor(msg: string = ErrorMessage.FORBIDDEN, err?: unknown) {
    super({
      code: ErrorCode.FORBIDDEN,
      type: ErrorType.FORBIDDEN,
      message: msg,
      error: err,
    })
  }
}
