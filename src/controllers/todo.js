"use strict"
/* ---------------------------------- *
            CONTROLLERS todo.js
/* ---------------------------------- */
require('express-async-errors')

const Todo = require('../models/todo')

module.exports = {

    list: async (req, res) => {
        const data = await Todo.findAndCountAll()
        res.status(200).send({
            error: false,
            result: data
        })
    },

    create: async (req, res) => {
        const data = await Todo.create(req.body)
        res.status(201).send({
            error: false,
            message: 'Created',
            body: req.body,
            result: data
        })
    },

    read: async (req, res) => {
        const data = await Todo.findByPk(req.params.id)

        if (data == null) {
            res.status(200).send({
                error: false,
                message: 'Record Not found'
            })
        } else {
            res.send({
                error: false,
                message: 'Record Found',
                result: data
            })
        }
    },

    update: async (req, res) => {
        router.put('/:id', async (req, res) => {
            const data = await Todo.update(req.body, { where: { id: req.params.id } })
            res.status(202).send({
                error: false,
                body: req.body,
                message: 'updated',
                isUpdated: true,
                result: await Todo.findOne({ where: { id: req.params.id } })
            })
        })
    },

    delete: async (req, res) => {
        router.delete('/:id', async (req, res) => {
            const isDeleted = await Todo.destroy({ where: { id: req.params.id } })
            if (isDeleted) {
                res.sendStatus(204)
            } else {
                res.status(404).send({
                    message: 'Record Not Found !'
                })
            }
        })
    }
}