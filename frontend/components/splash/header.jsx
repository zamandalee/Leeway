import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser }) => (
    <nav className="login-signup">
        <img className="nav-logo" src="" height="50" width="50"/>
        <Link className="header-button" to="/login">Login</Link>
        <Link className="header-button" to="/signup">Sign up!</Link>
    </nav>
);

export default Header;
