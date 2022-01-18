const CustomerLockListService = require('./CustomerLockListService')
exports.CustomerList = async (req, res) => {
    const locked = req.query.locked;
    if(locked){
        const customers = await CustomerLockListService.listLocked(locked)
        res.render('CustomerLockList', {customers});
    }
    else
    { 
        const customers = await CustomerLockListService.CustomerList();
        res.render('CustomerLockList', {customers});
    }
}