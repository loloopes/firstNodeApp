const model = require('../../model/artist/index');
const statusCode = require('http-status-codes').StatusCodes;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const found = model.findById(id);
    if (!found) return res.status(404).end();

    await model.remove(id);

    return res.status(statusCode.NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
}