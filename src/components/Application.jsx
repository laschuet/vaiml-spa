import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import AnalyticsPage from './AnalyticsPage';
import HomePage from './HomePage';
import TestPage from './TestPage';

const Application = () => {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/" exact activeClassName="selected">
            Home
          </NavLink>
          <NavLink to="/analytics" activeClassName="selected">
            Analytics
          </NavLink>
          <NavLink to="/tests" activeClassName="selected">
            Tests
          </NavLink>
        </nav>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/analytics" component={AnalyticsPage} />
          <Route path="/tests" component={TestPage} />
        </div>
      </div>
    </Router>
  );
};

export default Application;
