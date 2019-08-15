
/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
//const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
global.shops = [];
const createShop = () => {
  return {
    name: "candy",
    employees: true,
    currentlyOpen: true
  }
}
const addShop = (shop) => {
    global.shops.push(shop)
}
const getShops = () => {
    return global.shops
}
const getShopByName = (name) => {
    let matchingShops = global.shops.filter(shop => shop.name === name)
    if(matchingShops.length < 1)
    return null

    return matchingShop[0]
}
const getShopIndexAtName = (name) => {
    return global.shops.findIndex(shop => shop.name === name)
}
const updateShopAtName = (name, shop) => {
    let i = getShopIndexAtName(name)
  
    if(i < 0)
      return
  
    global.shops[i] = shop
  }
  const deleteShopAtName = (name) => {
    let i = getShopIndexAtName(name)
  
    if(i < 0)
      return
     
    global.shops.splice(i, 1)
  }


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
//const SampleModelSchema = new mongoose.Schema({
//  name: String
//})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
//const SampleCollection = mongoose.model('Sample', SampleModelSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
        //function getHelloWorldString() {
        //return 'hello world'
        //}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
    addShop,
    createShop,
    deleteShopAtName,
    getShopByName,
    getShops,
    updateShopAtName
  }
