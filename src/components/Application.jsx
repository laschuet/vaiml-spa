import { SmileyIcon } from '@primer/octicons-react';
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';

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
            <NavLink className="mr-2 text-white" to="/">
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/tests" element={<TestPage />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
};

export default hot(Application);
