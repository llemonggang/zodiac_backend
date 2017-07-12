var express = require('express');
var router = express.Router();
var http = require('http');
var axios = require('axios');

router.get('/', function(req, res, next) {

  axios.get('http://sandipbgt.com/theastrologer/api/'),
  .then(function (response) {
    console.log(response.data);
    res.json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

});

module.exports = router;
