const Order = require('../models/order')
const OrderItem = require('../models/order_item')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config();

module.exports.postCreateOrder = (req, res, next) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(error){
            res.status(403)
        } else {
            if(authData.role == "admin"){
                res.status(403).send('You are not authorized')
            } else {
                var head = {
                    status: req.body.orderStatus,
                    userId: authData.id
                }

                var data = {}
            
                Order
                    .create(head)
                    .then(headOrder => {
                        for(var i = 0; i < req.body.items.length; i++){
                            req.body.items[i].orderId = headOrder.id
                        }

                        data.headOrder = headOrder
            
                        return OrderItem.bulkCreate(req.body.items)
                    })
                    .then(items => {
                        data.detailOrder = items
                        res.json(data)
                    })
                    .catch(error=>{
                        console.log(error)
                    })
            }
        }
    })
}

module.exports.getOrderDetail = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(error){
            res.status(403)
        } else {
            if(authData.role == "admin"){
                res.status(403).send('You are not authorized')
            } else {
                Order
                    .findByPk(req.params.id, {
                        include:[
                            {model: OrderItem, as: "Items", required: true}
                        ]
                    })
                    .then(order => {
                        res.json(order)
                    })
            }
        }
    })
}

// where : {userId: authData.id}