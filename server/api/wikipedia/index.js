
var router = require('express').Router();

var controller = require('./wikipedia.controller.js');

module.exports = router;

router.get('/', controller.index);