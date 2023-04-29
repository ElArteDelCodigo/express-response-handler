import { BaseError } from './BaseError'
import { ErrorType, ErrorCode, ErrorMessage } from '../constants'

export class NotFoundError extends BaseError {
  constructor(msg: string = ErrorMessage.NOT_FOUND, err?: unknown) {
    super({
      code: ErrorCode.NOT_FOUND,
      type: ErrorType.NOT_FOUND,
      message: msg,
      error: err,
    })
  }
}
