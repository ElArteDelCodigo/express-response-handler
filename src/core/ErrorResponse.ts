import { AxiosError } from 'axios'
import { cleanAxiosResponse } from '@elartedelcodigo/express-logger'
import { ErrorCode, ErrorMessage } from '../constants'
import { BaseError, ExternalServiceError } from '../errors'

export class ErrorResponse extends Error {
  codigo: number
  mensaje: string
  error: unknown
  stack: string | undefined

  constructor(original: unknown) {
    super()

    if (original instanceof BaseError) {
      this.codigo = original.params.code
      this.mensaje = original.params.message
      this.error = original.params.error
      this.stack = original.stack
      return
    }

    if (original instanceof AxiosError) {
      this.codigo = ErrorCode.INTERNAL_SERVER_ERROR
      this.mensaje = ErrorMessage.INTERNAL_SERVER_ERROR
      this.error = { axiosError: original.toJSON() }
      this.stack = original.stack
      return
    }

    if (original instanceof ErrorResponse) {
      this.codigo = original.codigo
      this.mensaje = original.mensaje
      this.error = original.error
      this.stack = original.stack
      return
    }

    if (original instanceof ExternalServiceError) {
      this.codigo = ErrorCode.BAD_REQUEST
      this.mensaje = original.mensaje
      this.error = cleanAxiosResponse(original.error)
      this.stack = original.stack
      return
    }

    if (original instanceof Error) {
      this.codigo = ErrorCode.INTERNAL_SERVER_ERROR
      this.mensaje = ErrorMessage.INTERNAL_SERVER_ERROR
      this.error = cleanAxiosResponse(original)
      this.stack = original.stack
      return
    }

    this.codigo = ErrorCode.INTERNAL_SERVER_ERROR
    this.mensaje = ErrorMessage.INTERNAL_SERVER_ERROR
    try {
      this.error = String(original)
    } catch (e) {
      this.error = '' // Lo intentamos :)
    }
  }
}
