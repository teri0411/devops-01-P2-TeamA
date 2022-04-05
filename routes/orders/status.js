'use strict'
const { updateOneorder } = require('../../model')

module.exports = async function (fastify, opts) {
    fastify.patch('/:id/status', async function (request, reply) {
        const result = await updateOneorder(this.mongo,request.params.id,request.body)
    
        result.value.deliveryInfo.status = request.body.status
        
        reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8','Access-Control-Allow-Origin: *')
        .send({"_id": result.value._id, "orderedMenu": result.value.orderedMenu, "deliveryInfo": result.value.deliveryInfo, "restaurant":result.value.restaurant})


    })    
}