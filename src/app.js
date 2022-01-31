const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const morgan = require('morgan');
app.set("PORT", process.env.PORT || 4000);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router)
app.use(morgan('dev'));
module.exports = app