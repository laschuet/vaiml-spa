import React from 'react';

import { useRest } from '../hooks/useRest';
import Contribution from './Contribution';
import WebSocketTest from './WebSocketTest';

const Application = () => {
  const { data: contributions, hasError, isLoading, fetch } = useRest(
    'http://localhost:4010/contributions',
    [],
  );

  return (
    <div className="d-flex">
      {hasError && <div>Oops! An error occured...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="d-flex flex-column">
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
      )}
      <WebSocketTest />
    </div>
  );
};

export default Application;
