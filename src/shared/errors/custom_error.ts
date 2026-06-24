import { StatusCodes } from 'http-status-codes';

export default class CustomError extends Error {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      name: this.name,
    };
  }

  static badRequest(message: string) {
    return new CustomError(StatusCodes.BAD_REQUEST, message);
  }

  static unauthorized(message: string) {
    return new CustomError(StatusCodes.UNAUTHORIZED, message);
  }

  static forbidden(message: string) {
    return new CustomError(StatusCodes.FORBIDDEN, message);
  }

  static notFound(message: string) {
    return new CustomError(StatusCodes.NOT_FOUND, message);
  }

  static internalServer(message = 'Internal Server Error') {
    return new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}