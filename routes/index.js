var express = require('express');
var React = require('react');
var Page = require('../src/Page.jsx');
var router = express.Router();
var braintree = require('braintree');


/* Braintree */
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: 'phmkjnhztg5d87cw',
  publicKey: 'tssk6mkt8w4hdp8t',
  privateKey: '48be65e9cccd90a8dd4b8a034c3711d9'
});

router.get("/test", function (req, res) {
  console.log('fetched token');
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

router.post("/payment-methods", function (req, res) {
  var nonce = req.body.payment_method_nonce;
  // Use payment method nonce here
  gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonce,
  }, function (err, result) {
    if (!err) {
      res.send(JSON.stringify(result))
    }
    else {
      res.send(err)
    }
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var props = { message: 'Hello!' }
  var content = React.renderToString(React.createElement(Page, props))
  res.render('index', {
    title: 'My App',
    content: content,
    props: props
  })
});

module.exports = router;
