const express = require('express');
const getBreed = require('../controllers/getBreed');
const getDetail = require('../controllers/getDetail');
const router = express.Router()
router.get("/getBredds", getBreed)
router.get("/getDetail/:id", getDetail)
module.exports = router;