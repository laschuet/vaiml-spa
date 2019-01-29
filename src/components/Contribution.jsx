import React from 'react';
import PropTypes from 'prop-types';

const Contribution = props => (
  <div>
    <div>
      {props.author} &middot; {props.timestamp} &middot; #{props.id}
    </div>
    <div>{props.children}</div>
  </div>
);

Contribution.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Contribution;
