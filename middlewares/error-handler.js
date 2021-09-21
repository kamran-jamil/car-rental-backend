function getErrorMessage(error) {
  if (error.message) {
    return error.message;
  }
  return "";
}

function logErrorMessage(error) {
  console.error("error: ", error);
}

function isErrorStatusCode(statusCode) {
  return statusCode >= 400 && statusCode < 600;
}

function getHttpStatusCode({ error, response }) {
  const statusCodeFromError = error.status || error.statusCode;
  if (isErrorStatusCode(statusCodeFromError)) {
    return statusCodeFromError;
  }

  const statusCodeFromResponse = response.statusCode;
  if (isErrorStatusCode(statusCodeFromResponse)) {
    return statusCodeFromResponse;
  }
  return 500;
}

function errorHandlerMiddleware(error, request, response) {
  const errorMessage = getErrorMessage(error);
  logErrorMessage(errorMessage);
  const errorResponse = {
    statusCode: getHttpStatusCode({ error, response }),
  };
  return response.status(errorResponse.statusCode || 500).send({
    error: {
      status: errorResponse.statusCode || 500,
      message: errorMessage || "Internal Server Error",
    },
  });
}

module.exports = errorHandlerMiddleware;
