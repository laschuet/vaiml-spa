import React from 'react';

import Contribution from './Contribution';
import WebSocketTest from './WebSocketTest';

const Application = () => (
  <div>
    <WebSocketTest />
    <hr />
    <Contribution author="Author 1">Content</Contribution>
    <Contribution author="Author 2">Other content</Contribution>
  </div>
);

export default Application;
