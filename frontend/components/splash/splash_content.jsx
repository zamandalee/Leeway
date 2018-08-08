import React from 'react';
import { Link } from 'react-router-dom';

const SplashContent = () => {
  return(
    <div className="splash">

      <nav className="splash-nav">
        <Link to='/'>
          <img className="nav-logo" src={window.images.leewaylogo}/>
        </Link>
        <div className="signup-login">
          <Link className="login-button" to="/login">Sign in</Link>
          <Link className="get-started-button" to="/signup">Get Started</Link>
        </div>
      </nav>

      <div className="splash-content">
        <div className ="splash-picture-col">
          <img id="splash-illustration" src={window.images.splashpic}/>
        </div>

        <div className = "text-col">
          <h1>Where Work Happens</h1>
          <p>
            When your team needs to kick off a project, hire a new
            employee, deploy some code, review a sales contract, finalize
            next year's budget, measure an A/B test, plan your next office
            opening, and more, Leeway has you covered.
          </p>
          <Link className="get-started-button" to="signup">Get Started</Link>
          <span>
            Already using Leeway?  <Link className="signin-link" to="/signin">Sign in</Link>.
          </span>
        </div>
      </div>

    </div>
  );
};

export default SplashContent;
