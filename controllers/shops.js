const shopApi = require('../models/shops.js') 
const express = require('express')

const shopRouter = express.Router()
shopRouter.get('/shop/new', (req, res) => {
    res.send(shoppApi.createShop())
})

shopRouter.get('/', (req, res) => {
    res.send(shopApi.getShops())
})

shopRouter.get('/:name', (req, res) => {
    let shop = shopApi.getShopByName(req.params.name)
  res.send(shopApi.getShopByName(req.params.name))
})

shopRouter.post('/', (req, res) => {
    shopApi.addShop(req.body)
    res.send(200)
})
shopRouter.put('/:name', (req, res) => {
    shopApi.updateShopAtName(req.params.name, req.body)
    res.send(200)
})

shopRouter.delete('/:name', (req, res) => {
    shopApi.deleteShopAtName(req.params.name)
  
    res.send(200)
  })

module.exports = {
    shopRouter
}

