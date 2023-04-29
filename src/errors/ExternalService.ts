export class ExternalServiceError extends Error {
  mensaje: string
  error: unknown
  stack: string | undefined

  constructor(serviceName: string, err: Error | unknown, msg?: string) {
    super()

    const _msg = msg ? ` - ${msg}` : ''
    this.mensaje = `Error con el Servicio Web ${serviceName}${_msg}`
    this.error = err
    this.stack = err instanceof Error ? err.stack : undefined

    if (err instanceof ExternalServiceError) {
      this.mensaje = err.mensaje
      this.error = err.error
      this.stack = err.stack
    }
  }
}
