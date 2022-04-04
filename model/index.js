const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readAll: async (mongo) => {
    const collection = mongo.db.collection("order")
    const result = await collection.find({}).toArray()
    return result
  },

  updateOne: async (mongo, id, body) => {
    const collection = mongo.db.collection("order")
    const result = await collection.findOneAndUpdate({
     _id: ObjectId(id)
  }, 
    {
    $set: body
    })
  return result
  }
}
