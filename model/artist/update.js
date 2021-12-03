const connection = require('../connection');
const { ObjectId } = require('mongodb');
module.exports = async (artist) => {
  const { _id, ...artistWithoutId } = artist;
  // console.log(_id)
  // await (await connection()).collection('artist').updateOne(
  const result = await connection().then((db) => db.collection('artist').updateOne(
    {
      _id: ObjectId(_id),
    },
    {
      $set: artistWithoutId,
    },
  ));
    // console.log(result)
  return artist;
}