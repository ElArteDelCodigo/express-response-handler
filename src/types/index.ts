import { LoggerService } from '@elartedelcodigo/express-logger'

export type ErrorParams = {
  code: number
  type: string
  message: string
  error: Error | unknown
}

export type SuccessParams = {
  code: number
  type: string
  message: string
  data: unknown
}

export type HandlerParams = {
  logger: LoggerService | false
}

export type SuccessResult = {
  status: number
  message: string
  data: unknown
}

export type ErrorResult = {
  status: number
  message: string
  timestamp: number
  error?: unknown
}
