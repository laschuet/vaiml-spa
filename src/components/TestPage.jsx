import React, { Fragment } from 'react';

import WebSocketTest from './WebSocketTest';

const TestPage = () => (
  <Fragment>
    <h1>Tests</h1>
    <div className="columns">
      <div className="column col-4">
        <WebSocketTest />
      </div>
    </div>
  </Fragment>
);

export default TestPage;
