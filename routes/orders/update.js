'use strict'

const { updateone } = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.patch('/:id/status', async function (request, reply) {
    const result = await updateone(this.mongo, request.params.id, request.body)


    if(result === []){
      reply
        .code(404)
        .header('Content-Type','application/json')
        .send("error : Not Found")
    }else{
    reply
      .code(200)
      .header('Content-Type','application/json')
      .send({value : result})
    }
  })
}