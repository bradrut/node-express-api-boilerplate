import { ApiError, ApiErrorContext } from "./ApiError";

/**
 * Custom error class for 400-series errors
 */
export default class BadRequestError extends ApiError {
  private static readonly _statusCodeDefault = 400;
  private readonly _statusCode: number;
  private readonly _logging: boolean;
  private readonly _context: ApiErrorContext;

  constructor(params?: { statusCode?: number, message?: string, context?: { [key: string]: any }, logging?: boolean }) {
    const { statusCode, message, logging } = params || {};

    super(message || "Bad request");
    this._statusCode = statusCode || BadRequestError._statusCodeDefault;
    this._context = params?.context || undefined;
    this._logging = logging || true;

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  get error() {
    return { message: this.message, context: this._context };
  }

  get statusCode() {
    return this._statusCode;
  }

  get logging() {
    return this._logging;
  }
}