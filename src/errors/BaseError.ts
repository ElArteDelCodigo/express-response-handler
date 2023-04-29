import { ErrorParams } from '../types'

export class BaseError extends Error {
  params: ErrorParams

  constructor(params: ErrorParams) {
    super(params.message)
    this.name = BaseError.name
    this.params = params
  }
}
