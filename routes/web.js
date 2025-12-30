const express = require('express');
const router = express.Router();

const BaseController = require('../src/controller/BaseController.js');

router.get('/', BaseController.index);

module.exports = router;