import PropTypes from 'prop-types';
import React from 'react';

import {
  SETTINGS_DATASET_NAME_KEY,
  SETTINGS_DATASET_NAME_VALUE_DEFAULT,
} from '../constants/settings';
import { useLocalStorage } from '../hooks/useLocalStorage';

const DatasetSettings = ({ datasets }) => {
  const [datasetName, setDatasetName] = useLocalStorage(
    SETTINGS_DATASET_NAME_KEY,
    SETTINGS_DATASET_NAME_VALUE_DEFAULT,
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
            <option value={SETTINGS_DATASET_NAME_VALUE_DEFAULT}>
              {SETTINGS_DATASET_NAME_VALUE_DEFAULT}
            </option>
            {datasets.map(({ id, name }) => (
                <option key={id} value={name}>{name}</option>
            ))}
          </select>
        </dd>
      </dl>
    </form>
  );
};

DatasetSettings.propTypes = {
  datasets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DatasetSettings;
