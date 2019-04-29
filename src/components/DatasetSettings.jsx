import PropTypes from 'prop-types';
import React from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

const DatasetSettings = props => {
  const [dataset, setDataset] = useLocalStorage(
    'vaiml:settings:dataset',
    props.datasets[0],
  );

  const handleChange = evt => {
    setDataset(evt.target.value);
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
            value={dataset}>
            {props.datasets.map(ds => {
              return (
                <option key={ds.id} value={ds.name}>
                  {ds.name}
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
