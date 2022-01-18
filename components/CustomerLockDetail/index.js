var express = require('express');
var router = express.Router();
const CustomerDetailLockController = require('./CustomerDetailLockController')
//CustomerDetail
router.use(express.static('public'));
router.get('/:id', CustomerDetailLockController.CustomerLockDetail);
module.exports = router;