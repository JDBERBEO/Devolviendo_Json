const { Router } = require('express')
const router = Router()


const {
    getProducts,

} = require('./controller')


router.get('/products', getProducts)


module.exports = router