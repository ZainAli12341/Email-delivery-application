const express = require('express')

const router = express.Router()

const emaildeliveryController = require('../controllers/emaildelivery')


router.get('/',emaildeliveryController.getPage)
router.post('/',emaildeliveryController.deliverEmail)



module.exports = router;