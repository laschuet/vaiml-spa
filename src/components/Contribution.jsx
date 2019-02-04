import PropTypes from 'prop-types';
import React from 'react';

const Contribution = props => (
  <div className="card">
    <div className="card-header">
      <div className="card-subtitle text-gray">
        {props.author} &middot; {props.timestamp} &middot; #{props.id}
      </div>
    </div>
    <div className="card-body">{props.children}</div>
  </div>
);

Contribution.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Contribution;
