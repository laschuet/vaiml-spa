import React from 'react';
import PropTypes from 'prop-types';

const Contribution = props => (
  <div>
    <div>{props.author}</div>
    <div>{props.children}</div>
  </div>
);

Contribution.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Contribution;
