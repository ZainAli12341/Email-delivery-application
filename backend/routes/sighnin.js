const express = require('express')
const router = express.Router()
const sighninController = require('../controllers/sighnin')
router.post('/',sighninController.signIn)
router.get('/',sighninController.getPage)



module.exports = router;