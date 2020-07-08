import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from '../components/Form';
import Listing from '../components/Listing';

export default (
  <Router>
    <Switch>
      <Route path='/' exact component={Form} />
      <Route path='/listing' exact component={Listing} />
    </Switch>
  </Router>
);