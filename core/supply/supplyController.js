'use strict';

const service = require('./supplyService');

module.exports = {
    create,
    update,
    select,
    selectTotalSpend,
    selectById
}

async function create(req, res) {
    try {
        let result = await service.create(req.body);
        res.status(201);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function update(req, res) {
    try {
        let result = await service.update(Object.assign(req.body, req.params));
        res.status(200);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function select(req, res) {
    try {
        let result = await service.select();
        res.status(200);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function selectTotalSpend(req, res) {
    try {
        let result = await service.selectTotalSpend(req.params);
        res.status(200);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function selectById(req, res) {
    try {
        let result = await service.selectById(req.params);
        res.status(200);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}
