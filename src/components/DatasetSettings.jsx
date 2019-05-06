import PropTypes from 'prop-types';
import React from 'react';

import {
  SETTINGS_DATASET_NAME,
  SETTINGS_DATASET_NAME_DEFAULT,
} from '../constants/settings';
import { useLocalStorage } from '../hooks/useLocalStorage';

const DatasetSettings = props => {
  const [datasetName, setDatasetName] = useLocalStorage(
    SETTINGS_DATASET_NAME,
    SETTINGS_DATASET_NAME_DEFAULT,
  );

  const handleChange = evt => {
    setDatasetName(evt.target.value);
  };

  return (
    <form>
      <dl className="form-group">
        <dt>
          <label htmlFor="dataset-select">Dataset</label>
        </dt>
        <dd>
          <select
            id="dataset-select"
            className="form-select"
            aria-label="Dataset"
            onBlur={handleChange}
            onChange={handleChange}
            value={datasetName}>
            {props.datasets.map(dataset => {
              return (
                <option key={dataset.id} value={dataset.name}>
                  {dataset.name}
                </option>
              );
            })}
          </select>
        </dd>
      </dl>
    </form>
  );
};

DatasetSettings.propTypes = {
  datasets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DatasetSettings;
