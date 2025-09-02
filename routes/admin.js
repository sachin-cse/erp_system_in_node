const express = require('express');
const router = express('router');
const db_conn = require('../db_conn');

const baseController = require('../src/Admin/controller/baseController');

// router.get('/dashboard', (req, res)=>{
//     res.send('Hare Krishna');
// });
router.route('/dashboard').get(baseController.index);


module.exports = router;