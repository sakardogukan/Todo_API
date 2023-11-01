"use strict"
/* ---------------------------------- *
            dbConneciton.js
/* ---------------------------------- */

//! SEQUELIZE
/* ---------------------------------------- */
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(('sqlite:' + (process.env.SQLITE || './dbsqlite3')) && ('postgres://postgres:123456@localhost:5432/todoch14')) //DB connection details (Where is db?)
/* ---------------------------------------- */

const dbConnection = () => {

    //! Synchronization - RUN ONCE. 
    /* ---------------------------------------- */
    // sequelize.sync() // Create Table
    // sequelize.sync({ force: true }) // Drop & Create
    // sequelize.sync({ alter: true }) // Backup & Drop & Create & From Backup.
    /* ---------------------------------------- */
    //! DB Connected.
    /* ---------------------------------------- */
    sequelize.authenticate()
        .then(() => console.log('* DB Connected Sqlite3 & PgAdmin4 *'))
        .catch((err) => console.log('* DB Not Connected Sqlite3 & Pgadmin4 *', err))
    /* ---------------------------------------- */
}

module.exports = { sequelize, DataTypes, dbConnection }
