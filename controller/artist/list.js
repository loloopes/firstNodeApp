const model = require('../../model/artist/index');
const statusCode = require('http-status-codes').StatusCodes;

module.exports = async (req, res, next) => {
  try {
    const artist = await model.find();

    return res.status(statusCode.OK).send(artist);
  } catch (err) {
    next(err);
  };
};