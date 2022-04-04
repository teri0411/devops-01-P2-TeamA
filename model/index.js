const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readorder: async (mongo) => {
    const collection = mongo.db.collection("order")
    const result = await collection.find({}).toArray()
    return result
  },
  readrestaurant: async (mongo) => {
    const collection = mongo.db.collection("restaurants")
    const result = await collection.find({}).toArray()
    return result
  },

  updateOneorder: async (mongo, id, body) => {
    const collection = mongo.db.collection("order")
    const result = await collection.findOneAndUpdate({
     _id: ObjectId(id)
  }, 
    {
    $set: body
    })
  return result
  },
  updateOnerestaurant: async (mongo, id, body) => {
    const collection = mongo.db.collection("restaurants")
    const result = await collection.findOneAndUpdate({
     _id: ObjectId(id)
  }, 
    {
    $set: body
    })
  return result
  }
}
