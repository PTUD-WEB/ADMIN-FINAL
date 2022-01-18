var express = require('express');
var router = express.Router();

const CustomerListLockController = require('./CustomerListLockController')
router.use(express.static('public'));
router.get('/', CustomerListLockController.CustomerList)
//ProductDetail
module.exports = router;