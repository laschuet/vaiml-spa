import React, { Fragment } from 'react';

import { useRest } from '../hooks/useRest';
import ContributionList from './ContributionList';

const AnalyticsPage = () => {
  const { data: contributions, hasError, isLoading, fetch } = useRest(
    'http://localhost:4010/contributions',
    [],
  );

  return (
    <Fragment>
      <h1>Analytics</h1>
      {hasError && <div>Oops! An error occured...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ContributionList contributions={contributions} />
      )}
    </Fragment>
  );
};

export default AnalyticsPage;
