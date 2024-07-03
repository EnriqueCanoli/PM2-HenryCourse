const express = require("express");
const router = require("./routes/")
const morgan = require('morgan');
const cors = require('cors');

const app = express(); 
/*Middlewares*/
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

/**el servidor conozca el erutador */
app.use(router);

module.exports = app;
