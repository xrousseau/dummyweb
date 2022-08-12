var express = require('express');
var router = express.Router();
var ip = require('ip');
require('dotenv').config();

const pgp = require('pg-promise')(/* options */)
const db = pgp(`postgres://${process.env.PGUSR}:${process.env.PGPWD}@${process.env.PGSVR}:5432/${process.env.PGDB}`)

/* GET home page. */
router.get('/', function(req, res, next) {
  db.any('SELECT title FROM movies')
  .then((data) => {
    res.render('index', { title: ip.address(), data: data });
    
  })
  .catch((error) => {
    console.log('ERROR:', error)
    res.render('error', { error: error });
  })
});

module.exports = router;



