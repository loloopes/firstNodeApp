const model = require('../../model/artist/index');
const statusCodes = require('http-status-codes').StatusCodes;

module.exports = async (req, res, next) => {
  try {
    const {name, genres} = req.body;

    if(!name || !genres) return res.status(400).send({message: 'must inform name and genre'});

    const newArtist = { name, genres };
    await model.create(newArtist);

    // const artist = await model.findById(id);

    // if (!artist) res.status(404).end()

    return res.status(statusCodes.OK).send(newArtist);
  } catch (err) {
    next(err);
  };
};