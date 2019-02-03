import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import AnalyticsPage from './AnalyticsPage';
import HomePage from './HomePage';
import TestPage from './TestPage';

const Application = () => {
  return (
    <Router>
      <div className="d-flex">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/tests">Tests</Link>
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
