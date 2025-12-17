import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";


/**
 * Registered with Express in index.ts and the Express.router in routes.ts so that all app errors are routed through here.
 * All endpoint controller functions should catch errors and pass them to the `next()` function to be handled here.
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Handled errors
  if(err instanceof ApiError) {
    const { statusCode, error, logging } = err;
    if(logging) {
      console.error(JSON.stringify({
        code: err.statusCode,
        error: err.error,
        stack: err.stack,
      }, null, 2));
    }

    return res.status(statusCode).send(error);
  }

  // Unhandled errors
  console.error(JSON.stringify(err, null, 2));
  return res.status(500).send({ message: "An unexpected error has occurred" });
};
