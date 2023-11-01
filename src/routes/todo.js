"use strict"
/* ---------------------------------- *
            ROUTER todo.js
/* ---------------------------------- */

//! require methods called
/* ---------------------------------- */
const router = require('express').Router()

const todo = require('../controllers/todo')
/* ---------------------------------- */

router.route('/')
    .get(todo.list)
    .get(todo.create)

router.route('/:id')
    .get(todo.read)
    .get(todo.update)
    .get(todo.delete)

module.exports = router