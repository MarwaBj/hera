import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../containers/navbarContainer';
import LandingPage from '../containers/landingPageContainer';
import NotFoundPage from '../components/notFoundPage';

import './App.less';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
