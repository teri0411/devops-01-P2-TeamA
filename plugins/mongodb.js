'use strict'
const fp = require('fastify-plugin')
const mongoURL = process.env.MONGODB_ENDPOINT
console.log(mongoURL)
module.exports = fp(async function (fastify, opts) {
  if (process.env.NODE_ENV === 'test') {
    return
  }
  fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: mongoURL
  })
})