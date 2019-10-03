'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('brother', { name: 'Umang', description: ' I am manager of IDBI Bank' });
});

module.exports = router;
