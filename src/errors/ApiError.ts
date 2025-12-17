export type ApiErrorContext = { [key: string]: any } | undefined;

export type ApiErrorContent = {
  message: string,
  context?: ApiErrorContext  // Careful not to log any sensitive company or user data!
};

export abstract class ApiError extends Error {
  abstract readonly statusCode: number;
  abstract readonly error: ApiErrorContent;
  abstract readonly logging: boolean;

  constructor(message: string) {
    super(message);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}