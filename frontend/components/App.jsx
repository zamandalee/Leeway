import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContent from './splash/splash_content';
import Workspace from './workspace/workspace';
import ChannelCreateContainer from './channel/channel_create_container';
import DMForm from './direct_messages/dm_form';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/workspace" component={Workspace} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/channels/new" component={ChannelCreateContainer} />
      <ProtectedRoute path="/directmessages/new" component={DMForm} />
      <Route exact path="/" component={SplashContent} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
