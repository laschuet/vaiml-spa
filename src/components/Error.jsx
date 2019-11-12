import PropTypes from 'prop-types';
import React from 'react';

const Error = ({ message = '' }) => (
  <div className="flash flash-error">
    {message === '' ? 'Oops! An error occured...' : message}
  </div>
);

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
