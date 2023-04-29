import { BaseError } from './BaseError'
import { ErrorType, ErrorCode, ErrorMessage } from '../constants'

export class PreconditionFailedError extends BaseError {
  constructor(msg: string = ErrorMessage.PRECONDITION_FAILED, err?: unknown) {
    super({
      code: ErrorCode.PRECONDITION_FAILED,
      type: ErrorType.PRECONDITION_FAILED,
      message: msg,
      error: err,
    })
  }
}
