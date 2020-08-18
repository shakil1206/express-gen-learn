var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/thank', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
