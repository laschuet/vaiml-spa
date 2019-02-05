import PropTypes from 'prop-types';
import React from 'react';

const Contribution = props => (
  <div className="card mb-2">
    <div className="card-header">
      <button className="btn btn-link btn-sm float-right">Do 3</button>
      <div className="card-subtitle text-gray">
        {props.author} &middot; {props.timestamp} &middot; #{props.id}
      </div>
    </div>
    <div className="card-body">{props.children}</div>
    <div className="card-footer">
      <button className="btn btn-primary btn-sm">Do 1</button>{' '}
      <button className="btn btn-sm">Do 2</button>
    </div>
  </div>
);

Contribution.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Contribution;
