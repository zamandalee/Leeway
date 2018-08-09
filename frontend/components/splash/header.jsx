import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => (
    <nav className="splash-nav">
      <Link to='/'>
        <img className="nav-logo" src={window.images.leewaylogo}/>
      </Link>
      <div className="signup-login">
        <Link className="login-button" to="/login" hidden={!!currentUser}>Sign in</Link>
        <Link className="get-started-button" to="/signup" hidden={!!currentUser}>Get Started</Link>
        <button className="logout-button" onClick={logout} hidden={!currentUser}>Logout</button>
      </div>
    </nav>

);

export default Header;
