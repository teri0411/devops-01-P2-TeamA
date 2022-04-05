'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: "mongodb://root:example@rupinloadbalancer-f8b426b4d30b6f65.elb.ap-northeast-2.amazonaws.com/baedal?authSource=admin&ssl=false"
  })
})