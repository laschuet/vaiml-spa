import React, { Fragment } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import AnalyticsPage from './AnalyticsPage';
import HomePage from './HomePage';
import TestPage from './TestPage';

const Application = () => {
  return (
    <Router>
      <Fragment>
        <header className="navbar p-2 bg-dark">
          <section className="navbar-section">
            <NavLink className="pr-2 text-light" to="/" exact>
              VAIML
            </NavLink>
            <NavLink className="pr-2 text-light" to="/analytics">
              Analytics
            </NavLink>
            <NavLink className="text-light" to="/tests">
              Tests
            </NavLink>
          </section>
        </header>
        <div className="px-2">
          <Route path="/" exact component={HomePage} />
          <Route path="/analytics" component={AnalyticsPage} />
          <Route path="/tests" component={TestPage} />
        </div>
      </Fragment>
    </Router>
  );
};

export default Application;
