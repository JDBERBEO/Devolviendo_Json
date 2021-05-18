const { Schema, model } = require('mongoose');


const Product = new Schema({
    name : {type: String},
    price: {type: String},
})

module.exports = model('Products', Product)