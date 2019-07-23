const Order = require('../models/order')
const OrderItem = require('../models/order_item')


module.exports.postCreateOrder = (req, res, next) => {
    var head = {
        status: req.body.orderStatus,
        userId: 2
    }

    Order
        .create(head)
        .then(headOrder => {
            for(var i = 0; i < req.body.items.length; i++){
                req.body.items[i].orderId = headOrder.id
            }

            return OrderItem.bulkCreate(req.body.items)
        })
        .then(items => {
            res.json(items)
        })
        .catch(error=>{
            console.log(error)
        })
}

module.exports.getOrderDetail = (req, res) => {
    Order
        .findByPk(req.params.id, {
            include:[{model: OrderItem, required: true}]
        })
        .then(order => {
            res.json(order)
        })
}