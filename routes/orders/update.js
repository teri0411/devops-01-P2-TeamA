'use strict'
const { updateOne } = require('../../model')

module.exports = async function (fastify, opts) {
    fastify.patch('/:id/status', async function (request, reply) {
        const result = await updateOne(this.mongo,request.params.id,request.body)
        
        reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(result.value)
    })    
}