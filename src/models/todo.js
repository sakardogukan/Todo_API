"use strict"
/* ---------------------------------- *
            MODELS todo.js
/* ---------------------------------- */


//! SEQUELIZE
/* ---------------------------------------- */
const { sequelize, DataTypes } = require('../dbConnection')
/* ---------------------------------------- */


//! Model Created
/* ---------------------------------------- */
const Todo = sequelize.define('todo', {
    title: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    description: DataTypes.TEXT,
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, //1: High 0:Normal -1:Low
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})
/* ---------------------------------------- */

module.exports = Todo