import { Response } from 'express'
import { ResponseHandler } from './ResponseHandler'
import { SuccessCode, SuccessMessage } from '../constants'
import { LoggerService, getErrorStack } from '@elartedelcodigo/express-logger'
import { ErrorResult, SuccessResult } from '../types'

export class Result {
  static logger: LoggerService | null = null

  static ok(res: Response, datos?: unknown, mensaje?: string) {
    const result: SuccessResult = {
      status: SuccessCode.OK,
      message: mensaje || SuccessMessage.OK,
      data: datos,
    }
    return res.status(SuccessCode.OK).json(result)
  }

  static created(res: Response, datos?: unknown, mensaje?: string) {
    const result: SuccessResult = {
      status: SuccessCode.CREATED,
      message: mensaje || SuccessMessage.CREATED,
      data: datos,
    }
    return res.status(SuccessCode.CREATED).json(result)
  }

  static fail(res: Response, error: Error) {
    const errorRequest = {
      method: res.req.method,
      originalUrl: res.req.originalUrl,
      headers: res.req.headers,
      params: res.req.params,
      query: res.req.query,
      body: res.req.body,
    }

    const errorResponse = ResponseHandler.createErrorResponse(error)

    const errorResult: ErrorResult = {
      status: errorResponse.codigo,
      message: errorResponse.mensaje,
      timestamp: Math.floor(Date.now() / 1000),
      error: process.env.NODE_ENV !== 'production' ? errorResponse.error : undefined,
    }

    if (errorResult.status < 500) {
      Result.logger?.warn({ errorResult })
      if (errorResponse.stack) {
        const customErrorStack = getErrorStack(errorResponse.stack)
        if (customErrorStack) Result.logger?.warn(customErrorStack)
      }
      Result.logger?.warn({ errorRequest })
      if (errorResponse.stack) {
        Result.logger?.warn(errorResponse.stack)
      }
    }

    if (errorResult.status >= 500) {
      Result.logger?.error({ errorResult })
      if (errorResponse.stack) {
        const customErrorStack = getErrorStack(errorResponse.stack)
        if (customErrorStack) Result.logger?.error(customErrorStack)
      }
      Result.logger?.error({ errorRequest })
      if (errorResponse.stack) {
        Result.logger?.error(errorResponse.stack)
      }
    }

    return res.status(errorResult.status).json(errorResult)
  }
}
