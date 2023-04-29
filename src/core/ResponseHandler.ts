import { HandlerParams } from '../types'
import { ErrorResponse } from './ErrorResponse'
import { Result } from './Result'

export class ResponseHandler {
  static initialize(options?: Partial<HandlerParams>) {
    const opt: HandlerParams = {
      logger: typeof options?.logger !== 'undefined' ? options?.logger : false,
    }
    if (opt.logger) {
      Result.logger = opt.logger
    }
  }

  static createErrorResponse(original: unknown) {
    return new ErrorResponse(original)
  }
}
