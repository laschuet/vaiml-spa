import React from 'react';
import PropTypes from 'prop-types';

const Contribution = props => (
  <div className="Box Box--condensed mb-2">
    <div className="Box-header">
      {props.author} &middot; {props.timestamp} &middot; #{props.id}
    </div>
    <div className="Box-footer">{props.children}</div>
  </div>
);

Contribution.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Contribution;
