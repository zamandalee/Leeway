import React from 'react';
// import HeaderContainer from './splash/header_container';
import SplashContent from './splash/splash_content';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashContent} />
    </Switch>
  </div>
);

export default App;
