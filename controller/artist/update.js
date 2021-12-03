const model = require('../../model/artist/index');
const { ObjectId } = require('mongodb');
const statusCode = require('http-status-codes').StatusCodes;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const found = await model.findById(ObjectId(id));
    if (!found) return res.status(statusCode.NOT_FOUND).end();

    const {name, genres} = req.body;
    if(!name || !genres) return res.status(statusCode.BAD_REQUEST).send({message: 'must inform name and genre'})

    const updated = await model.update({...found, name, genres });

    return res.status(200).send(updated);
  } catch (err) {
    next(err);
  }
}