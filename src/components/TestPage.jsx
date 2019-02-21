import React, { Fragment } from 'react';

import ChildProcessTest from './ChildProcessTest';
import WebSocketTest from './WebSocketTest';

const TestPage = () => (
  <Fragment>
    <h1>Tests</h1>
    <div className="clearfix gutter-condensed">
      <div className="col-4 float-left">
        <WebSocketTest />
      </div>
      <div className="col-4 float-left">
        <ChildProcessTest />
      </div>
    </div>
  </Fragment>
);

export default TestPage;
