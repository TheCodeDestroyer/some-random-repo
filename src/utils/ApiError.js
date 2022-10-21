class ApiError {
  constructor(statusCode, message, stack) {
    this.statusCode = statusCode;
    this.message = message;
    this.stack = stack;
  }

  static badRequest(error) {
    const statusCode = 400;

    if (typeof error === 'string') {
      return new ApiError(statusCode, error);
    }
    if (error instanceof Error) {
      return new ApiError(statusCode, error.message, error.stack);
    }

    return new ApiError(statusCode, 'Unknown error type');
  }

  static internalServerError(error) {
    const statusCode = 500;

    if (typeof error === 'string') {
      return new ApiError(statusCode, error);
    }
    if (error instanceof Error) {
      return new ApiError(statusCode, error.message, error.stack);
    }

    return new ApiError(statusCode, 'Unknown error type');
  }
}

module.exports = ApiError;
