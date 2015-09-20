import React from 'react'

export default class Page extends React.Component {

  componentDidMount() {
    console.log('componentDidMount')

    fetch('/test')
      .then(function(response) {
        return response.text()
      }).then(function(token) {
        braintree.setup(
          token,
          "dropin", {
          container: "payment-form"
        });
      })
  }

  handleClick() {
    console.log('hi')
  }

  render() {
    return (
      <div className="container">
        <form className="form-signin" id="checkout" method="post" action="/payment-methods">
          <div id="payment-form"></div>
          <input type="submit" value="Submit Payment" className="btn btn-lg btn-primary btn-block" />
        </form>

        <script src="https://js.braintreegateway.com/v2/braintree.js"></script>
      </div>
    )
  }
}
