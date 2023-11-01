"use strict"
/* ---------------------------------- *
    $ echo PORT=8000 > .env
    $ echo SQLITE=./db.sqlite3 >> .env
    $ npm init -y
    $ npm i express dotenv sequelize sqlite3
    $ npm i express-async-handler
    $ npm i express-async-errors
    $ npm i sequelize sqlite3 pg pg-hstore
/* ---------------------------------- */


/* ---------------------------------- */
const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000
/* ---------------------------------- */


/* ---------------------------------- */
app.use(express.json()) // Accept JSON data & convert to object

//Router Called
app.use(require('./src/routes/todo'))

//Database Connection: src/dbconneciton'da direkt export yapılmadı. Çünkü önce db'de model oluşturulmalı sonra DBConnect yapılmalıdır. Direkt export yapılmadığı için ve Asenkron fonksiyon olduğu için "30.satırda" fonksiyon olarak çalıştırıldı.
const { dbConnection } = require('./src/dbConnection')
dbConnection() // Run dbConnection

//errorHandler (catch error)
app.use(require('./src/errorHandler'))
/* ---------------------------------- *


/* ---------------------------------- */
//! Server üzerinden değil app üzerinden dinleme yapılmaktadır.
/* ---------------------------------- */
app.listen(PORT, () => console.log(`Running: http:127.0.0.1:${PORT}`))
