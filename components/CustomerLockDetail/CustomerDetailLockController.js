const CustomerDetailLockService = require('./CustomerDetailLockService')
const {models} = require('../../models')

exports.CustomerLockDetail = async (req, res, next) => {
    const id = req.params.id;
    const page = req.query.page;
    if(page){
        const customer = await CustomerDetailLockService.find_customer(id);
        res.render('CustomerLockDetail', {customer});
    }
    else{
        const customer = await CustomerDetailLockService.find_customer(id);
        res.render('CustomerLockDetail', {customer});
    }
}