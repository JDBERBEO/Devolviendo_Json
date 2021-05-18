const Product = require('./Product')

const getProducts = async(req,res) => {
    const products = await Product.find().lean();
    res.send(JSON.stringify(products))
}



module.exports = {
    getProducts
}