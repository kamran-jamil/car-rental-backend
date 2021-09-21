const logger = (req, res, next) => {
  const requestStart = Date.now();
  let errorMessage = null;
  let body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    body = Buffer.concat(body).toString();
  });
  req.on("error", (error) => {
    errorMessage = error.message;
  });
  res.on("finish", () => {
    const { rawHeaders, httpVersion, method, socket, url } = req;
    const { remoteAddress, remoteFamily } = socket;

    const { statusCode, statusMessage } = res;
    const headers = res.getHeaders();

    console.log(
      JSON.stringify({
        timestamp: Date.now(),
        processingTime: Date.now() - requestStart,
        rawHeaders,
        body,
        errorMessage,
        httpVersion,
        method,
        remoteAddress,
        remoteFamily,
        url,
        response: {
          statusCode,
          statusMessage,
          headers,
        },
      })
    );
  });

  next();
};

module.exports = logger;
