const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readall: async (mongo) => {
    const collection = mongo.db.collection("order")
    const result = await collection.find({}).toArray()
    return result
  },
  updateoneproduct: async (mongo, id, body) => {
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
