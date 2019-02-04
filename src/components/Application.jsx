import React, { Fragment } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import AnalyticsPage from './AnalyticsPage';
import HomePage from './HomePage';
import TestPage from './TestPage';

const Application = () => {
  return (
    <Router>
      <Fragment>
        <header className="d-flex px-2 py-3 bg-gray-dark text-white">
          <div className="mr-4">VAIML</div>
          <nav>
            <ul className="d-flex list-style-none text-bold">
              <li>
                <NavLink className="text-white pr-2" to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="text-white pr-2" to="/analytics">
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink className="text-white" to="/tests">
                  Tests
                </NavLink>
              </li>
            </ul>
          </nav>
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
