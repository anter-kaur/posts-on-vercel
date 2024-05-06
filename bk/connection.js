const mongoose = require('mongoose');

const connection = (conn) => {
    mongoose
        .connect(conn)
        .then(() => {
            console.log("Connected to database")
        })
        .catch((error) => {
            console.log('Failed to connect', error)
        })
}

module.exports = connection;