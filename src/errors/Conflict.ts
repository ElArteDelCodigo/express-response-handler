import { BaseError } from './BaseError'
import { ErrorType, ErrorCode, ErrorMessage } from '../constants'

export class ConflictError extends BaseError {
  constructor(msg: string = ErrorMessage.CONFLICT, err?: unknown) {
    super({
      code: ErrorCode.CONFLICT,
      type: ErrorType.CONFLICT,
      message: msg,
      error: err,
    })
  }
}
