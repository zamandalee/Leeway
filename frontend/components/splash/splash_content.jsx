import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './header_container';

class SplashContent extends React.Component {
  constructor(props) {
    super(props);
    this.demo = this.demo.bind(this);
  }

  demo() {
    return this.props.guestLogin().then( () => {
      this.props.history.push('/workspace');
    });
  }

  render() {
    const { currentUser } = this.props;
    return(
      <div className="splash">

        <HeaderContainer />

        <div className="splash-content">
          <div className ="splash-picture-col">
            <img id="splash-illustration" src={window.images.splashpic}/>
          </div>

          <div className="text-col">
            <h1>Where Work Happens</h1>

            <p className="blurb">
              When your team needs to kick off a project, hire a new
              employee, deploy some code, review a sales contract, finalize
              next year's budget, measure an A/B test, plan your next office
              opening, and more, Leeway has you covered.
            </p>

            <Link className="get-started-button" to="signup">Get Started</Link>
              {
                currentUser ? (
                  <div></div>
                ) : (
                  <button className="guest-login-button" onClick={this.demo}>Guest Login</button>
                )
              }

            <p> Already using Leeway? <Link className="signin-link" to="/signin">Sign in</Link>.</p>
          </div>
        </div>

      </div>
    );
  }
}


import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  guestLogin: () => dispatch( login({username: "harry_potter", password: "123456"}) )
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashContent);
