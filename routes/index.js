var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.redirect('/inventory');
  res.render('index.pug');
});

module.exports = router;
