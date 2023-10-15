const express =require('express')
const router = express.Router()
const customerControler = require('../controllers/customerControler')
// Home Route
router.get('/', customerControler.homepage)
router.get('/computer', customerControler.computer)
router.get('/contact', customerControler.contact)
router.get('/laptop', customerControler.laptop)
router.get('/product', customerControler.product)
router.get('/about', customerControler.about)



module.exports = router;