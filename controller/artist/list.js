const model = require('../../model/artist/index')

module.exports = async (req, res, next) => {
  try {
    const artist = await model.find();

    return res.status(200).send(artist);
  } catch (err) {
    next(err);
  }
}