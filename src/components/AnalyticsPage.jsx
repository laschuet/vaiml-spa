import React, { Fragment } from 'react';

import { SETTINGS_DATASET_NAME } from '../constants/settings';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useRest } from '../hooks/useRest';
import ContributionList from './ContributionList';

const AnalyticsPage = () => {
  const [datasetName] = useLocalStorage(SETTINGS_DATASET_NAME);
  const { data: contributions, hasError, isLoading } = useRest(
    `http://localhost:4010/datasets/${datasetName}/contributions`,
    [],
  );

  return (
    <Fragment>
      <h1>Analytics</h1>
      {hasError && <div>Oops! An error occured...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="clearfix gutter-condensed">
          <div className="col-6 float-left">
            <ContributionList contributions={contributions} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AnalyticsPage;
