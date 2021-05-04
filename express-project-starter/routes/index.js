var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('inside router.get /, req.session', req.session)
  res.render('index', {
    title: 'a/A Express Skeleton Home',
  });
});

module.exports = router;
