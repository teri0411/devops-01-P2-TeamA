'use strict'
const { readAll } = require('../../model')

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        const result = await readAll(this.mongo);
        
        if(result === []){
            reply
            .code(404)
            .header('Content-type','application/json; charset=utf-8')
            .send({error:"Not Found"})
        }
        else{
            reply
            .code(200)
            .header('Content-type','application/json; charset=utf-8')
            .send(result)
        }
})
}
