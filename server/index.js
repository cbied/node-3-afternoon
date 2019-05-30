require('dotenv').config();
const express = require('express'),
        massive = require('massive'),
        app = express(),
        productsController = require('./products_controller'),
        path = '/api/products',
        { SERVER_PORT, CONNECTION_STRING } = process.env;


massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('Database connected')
    })
    .catch(error => {
        console.log(error)
    });

app.use(express.json());

app.post(path, productsController.create)
app.get(path, productsController.getAll)
app.get(`${path}/:id`, productsController.getOne)
app.put(`${path}/:id`, productsController.update)
app.delete(`${path}/:id`, productsController.deleteProduct)



app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});