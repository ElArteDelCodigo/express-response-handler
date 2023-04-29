export enum ErrorMessage {
  BAD_REQUEST = 'Hubo un error al procesar su solicitud, revise el formato en el envío de datos e inténtelo nuevamente.',
  UNAUTHORIZED = 'Debe autenticarse para acceder al recurso.',
  FORBIDDEN = 'No cuenta con los privilegios suficientes para acceder al recurso.',
  NOT_FOUND = 'El servidor no puede encontrar el recurso solicitado.',
  CONFLICT = 'Hubo un error durante el proceso, inténtelo nuevamente.',
  PRECONDITION_FAILED = 'No se cumple con alguna condición que es necesaria para completar la tarea.',
  INVALID_TOKEN = 'La sesión ha expirado.',
  INTERNAL_SERVER_ERROR = 'Hubo un error inesperado, inténtelo nuevamente si el problema persiste comuníquese con el administrador.',
}

export enum ErrorCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  PRECONDITION_FAILED = 412,
  INVALID_TOKEN = 498,
  INTERNAL_SERVER_ERROR = 500,
}

export enum ErrorType {
  BAD_REQUEST = 'BAD_REQUEST',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  CONFLICT = 'CONFLICT',
  PRECONDITION_FAILED = 'PRECONDITION_FAILED',
  INVALID_TOKEN = 'INVALID_TOKEN',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

export enum SuccessMessage {
  OK = 'Tarea completada exitosamente.',
  CREATED = 'Recurso creado exitosamente.',
  NO_CONTENT = 'Tarea completada exitosamente.',
}

export enum SuccessCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
}

export enum SuccessType {
  OK = 'OK',
  CREATED = 'CREATED',
  NO_CONTENT = 'NO_CONTENT',
}
