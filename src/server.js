// lib
const express = require('express')
//import from folder
const route = require('./routes/index');
const configViewEngine = require('./config/engine/viewEngine')

require('dotenv').config()

// init param
const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 3001;

const app = express()

// Route
route(app);

// config static, engine files
configViewEngine(app);


app.listen(port, hostname, () => {
    console.log(`Run with port ${port}`)
})