import PropTypes from 'prop-types';
import React from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

const DatasetSettings = props => {
  const [datasetName, setDatasetName] = useLocalStorage(
    'vaiml:settings:dataset:name',
    props.datasets[0],
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
  ),
};

export default DatasetSettings;
