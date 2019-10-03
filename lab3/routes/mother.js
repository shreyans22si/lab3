'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('mother', { name: 'Mom', description: ' I am Mother of Shrayans Bavisi' });
});

module.exports = router;
