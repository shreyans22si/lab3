'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('father', { name: 'Father', description: ' I am Business Man' });
});

module.exports = router;
