import { SmileyIcon } from '@primer/octicons-react';
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import AnalyticsPage from './AnalyticsPage';
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import TestPage from './TestPage';

const Application = () => {
  return (
    <Router>
      <Fragment>
        <header className="p-2 bg-gray-dark">
          <section>
            <NavLink className="mr-2 text-white" to="/" exact>
              <SmileyIcon />
              <span className="ml-2">VAIML</span>
            </NavLink>
            <NavLink className="mr-2 text-white" to="/analytics">
              Analytics
            </NavLink>
            <NavLink className="mr-2 text-white" to="/settings">
              Settings
            </NavLink>
            <NavLink className="text-white" to="/tests">
              Tests
            </NavLink>
          </section>
        </header>
        <div className="p-2">
          <Route path="/" exact component={HomePage} />
          <Route path="/analytics" component={AnalyticsPage} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/tests" component={TestPage} />
        </div>
      </Fragment>
    </Router>
  );
};

export default hot(Application);
