var express = require('express');
var router = express.Router();
var ip = require('ip');

var pipo = "pipo";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ip.address(), pipo });
});

module.exports = router;
