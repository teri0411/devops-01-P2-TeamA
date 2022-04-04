'use strict'

const { readAll , readOne} = require('../../model')

module.exports = async function (fastify, opts) { 
  fastify.get('/', async function (request, reply) { //클라이언트에서 받아오는 요청 : request, DB에서 받아오는 응답 : reply
    const result = await readAll(this.mongo)
    if (result === []){
      reply
      .code(404)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({error : "Not Found"})
    }
    else {
      reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(result)
     }

  })
}

