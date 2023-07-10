const express = require('express')

const router = express.Router()

const sighnupController = require('../controllers/sighnup')

router.post('/',sighnupController.createSighnup)
router.get('/',sighnupController.getPage)
module.exports = router