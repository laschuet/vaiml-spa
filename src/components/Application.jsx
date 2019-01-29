import React from 'react';

import Contribution from './Contribution';
import WebSocketTest from './WebSocketTest';

const Application = () => {
  const contributions = [
    {
      id: 1,
      author: 'Me',
      text: 'Just a string',
      timestamp: '2019-01-29 10:05:15',
    },
    {
      id: 2,
      author: 'You',
      text: 'Two words',
      timestamp: '2019-01-30 23:30:05',
    },
  ];

  return (
    <div>
      <WebSocketTest />
      <br />
      {contributions.map(contribution => (
        <Contribution
          key={contribution.id}
          id={contribution.id}
          author={contribution.author}
          timestamp={contribution.timestamp}>
          {contribution.text}
        </Contribution>
      ))}
    </div>
  );
};

export default Application;
