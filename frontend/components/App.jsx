import React from 'react';
// import HeaderContainer from './splash/header_container';
import SplashContent from './splash/splash_content';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashContent} />
    </Switch>
  </div>
);

export default App;