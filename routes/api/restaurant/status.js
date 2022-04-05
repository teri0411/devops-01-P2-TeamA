'use strict'
const { updateOnerestaurant } = require('../../../model')
module.exports = async function (fastify, opts) {
    fastify.patch('/:id/status', async function (request, reply) {
        const result = await updateOnerestaurant(this.mongo,request.params.id,request.body)
    
        result.value.rating.status = request.body.status
        
        reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({"_id": result.value._id, "name":result.value.name, "menu":result.value.menu, "address":result.value.address, "rating":result.value.rating});


    })    
}