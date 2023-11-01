"use strict"
/* ---------------------------------- *
            ERROR HANDLER
/* ---------------------------------- */

module.exports = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler Runned...');
    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
        body: req.body
    })
}