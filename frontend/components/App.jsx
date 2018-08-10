import React from 'react';
// import HeaderContainer from './splash/header_container';
import SplashContent from './splash/splash_content';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/workspace" component={SplashContent} />
      <Route path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashContent} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
