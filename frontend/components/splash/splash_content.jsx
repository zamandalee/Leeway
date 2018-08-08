import React from 'react';
import { Link } from 'react-router-dom';

const SplashContent = () => {
  return(
    <div className="splash">

      <nav className="login-signup">
        <img className="nav-logo" src={window.images.leewaylogo} height="50" width="50"/>
        <Link className="header-button" to="/login">Login</Link>
        <Link className="header-button" to="/signup">Sign up!</Link>
      </nav>

      <div className='splash-content'>
        <div className ='splash-picture-col'>
          <img id='splash-illustration' src={window.images.splashpic}/>
        </div>

        <div className = 'text-column'>
          <h1>Where Work Happens</h1>
          <p>
            When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Leeway has you covered.
          </p>
          <Link className="get-started" to='signup'>Get Started</Link>
          <p>
            Already using Leeway? <Link to='/signin'>{'Sign in'}</Link>.
          </p>
        </div>
      </div>

    </div>
  );
};

export default SplashContent;
