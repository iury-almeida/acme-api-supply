'use strict';

const db = require('../../config/database');

module.exports = {
    create,
    update,
    select,
    selectTotalSpend,
    selectById
}

async function create(params) {

    try {

        let result = await db.query(`
            INSERT INTO supply.supply(
                name, 
                origin, 
                value,
                date,
                occurredat
            )
            VALUES(
                '${params.name}',
                '${params.origin}',
                ${params.value}, 
                '${params.date}',
                (to_timestamp(${Date.now()} / 1000))
            )
            RETURNING id;
        `);

        return result.rows[0];
    } catch (error) {
        return error;
    }
}

async function update(params) {
    try {

        await db.query(`
            UPDATE supply.supply
            SET
                name = '${params.name}',
                date = '${params.date}'
            WHERE id = ${params.id};    
        `);

        return params.id;
    
    } catch (error) {
        return error;
    }
}

async function select(params) {
    try {
        let result = await db.query(
            `
            SELECT 
                s.id,
                s.name,
                s.origin,
                s.value,
                s.date,
                s.occurredat
            FROM supply.supply s
            ORDER BY id asc
        `
        );

        return result.rows;
    } catch (error) {
        return error;
    }
}

async function selectTotalSpend(params) {
    try {
        let result = await db.query(
            `
            SELECT 
                SUM(value) AS total
            FROM supply.supply s
        `
        );

        return result.rows[0];
    } catch (error) {
        return error;
    }
}

async function selectById(params) {
    try {
        let result = await db.query(
            `
            SELECT 
                s.id,
                s.name,
                s.origin,
                s.value,
                s.date,
                s.occurredat
            FROM supply.supply s
            WHERE s.id = ${params.id}
        `
        );

        return result.rows[0];
    } catch (error) {
        return error;
    }
}