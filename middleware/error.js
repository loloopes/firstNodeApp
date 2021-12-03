const statusCode = require('http-status-codes').StatusCodes;

module.exports = (err, _req, res, _next) => {
  console.error(err.message)
  res.status(statusCode.INTERNAL_SERVER_ERROR).end()
}