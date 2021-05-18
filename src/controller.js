const Product = require('./Product')

const getProducts = async(req,res) => {
    let products = await Product.find().lean();
    products = JSON.stringify(products)



    res.send(products)
}



module.exports = {
    getProducts
}