const model = require('../../model/artist/index');
const statusCode = require('http-status-codes').StatusCodes;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artist = await model.findById(id);

    if (!artist) res.status(statusCode.NOT_FOUND).end()

    return res.status(statusCode.OK).send(artist);
  } catch (err) {
    next(err);
  }
}