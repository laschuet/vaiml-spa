import Octicon, { Smiley } from '@githubprimer/octicons-react';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import AnalyticsPage from './AnalyticsPage';
import HomePage from './HomePage';
import TestPage from './TestPage';

const Application = () => {
  return (
    <Router>
      <Fragment>
        <header className="p-2 bg-gray-dark">
          <section>
            <NavLink className="mr-2 text-white" to="/" exact>
              <Octicon icon={Smiley} />
              <span className="ml-2">VAIML</span>
            </NavLink>
            <NavLink className="mr-2 text-white" to="/analytics">
              Analytics
            </NavLink>
            <NavLink className="text-white" to="/tests">
              Tests
            </NavLink>
          </section>
        </header>
        <div className="p-2">
          <Route path="/" exact component={HomePage} />
          <Route path="/analytics" component={AnalyticsPage} />
          <Route path="/tests" component={TestPage} />
        </div>
      </Fragment>
    </Router>
  );
};

export default Application;
