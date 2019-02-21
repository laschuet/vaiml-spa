import PropTypes from 'prop-types';
import React from 'react';

const Contribution = props => (
  <div className="Box Box--condensed mb-2">
    <div className="Box-header clearfix">
      <div className="float-left">
        {props.author} &middot; {props.timestamp} &middot; #{props.id}
      </div>
      <button className="btn btn-link btn-sm float-right">Do 3</button>
    </div>
    <div className="Box-body">
      <div className="mb-2">{props.children}</div>
      <div>
        <button className="btn btn-primary btn-sm">Do 1</button>{' '}
        <button className="btn btn-sm">Do 2</button>
      </div>
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
