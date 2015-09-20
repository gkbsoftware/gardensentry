import React from 'react'

export default class Page extends React.Component {

  componentDidMount() {
    console.log('componentDidMount')

    // fetch('/test')
    //   .then(function(response) {
    //     return response.text()
    //   }).then(function(token) {
    //     braintree.setup(
    //       token,
    //       "dropin", {
    //       container: "payment-form"
    //     });
    //   })
  }

  handleClick() {
    console.log('hi')
  }

  clickStop() {
    console.log('***STOP CLICKED***');
    console.log('fetch post to server stopping all monitoring')
  }

  render() {
    return (
      <app>

      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">DeerSentry</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#control-panel">Control Panel</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      <div className="center">
        <h1>{'Humans 1 - Deer 0'}</h1>
        <img className="circle" width="25%" height="25%" src="http://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/291/056/datas/gallery.jpg"></img>
        <h5>{'Sorry deer, your days of egotistical frollicking in our gardens are OVER.'}</h5>
        <a onClick={this.clickStop} className="waves-effect waves-light red btn">{'ARM THE DEFENSES'}</a>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center orange-text"><i className="material-icons">warning</i></h2>
              <h5 className="center">Warns you of rampaging deer</h5>
              <p className="light">{'Infared sensors track movement in and around your precious garden.'}</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center red-text"><i className="material-icons">volume_up</i></h2>
              <h5 className="center">{'Alarm Buzzer'}</h5>
              <p className="light">{'When our defenses kick in, an alarm will sound, scaring away the rampaging deer.'}</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center green-text"><i className="material-icons">verified_user</i></h2>
              <h5 className="center">{'Protect your garden'}</h5>
              <p className="light">{'Feel safe, knowing your garden is protected.'}</p>
            </div>
          </div>
        </div>
      </div>

      <h3 id="how-it-works">{"How it works"}</h3>
      <div className="card-panel teal lighten-2 text-light-gray">

      </div>

      </app>
    )
  }
}
