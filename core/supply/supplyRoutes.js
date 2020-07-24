'use strict';

const supplyController = require('./supplyController');

module.exports = (app) => {
    app.post('/supply', supplyController.create);
    app.put('/supply/:id', supplyController.update);
    app.get('/supply', supplyController.select);
    app.get('/supply-total', supplyController.selectTotalSpend);
    app.get('/supply/:id', supplyController.selectById);
    app.get('/ping', (req, res) => {
        res.send(new Date());
    });
}