var express = require('express');
var router = express.Router();
var os = require("os");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: os.hostname() });
});

module.exports = router;
