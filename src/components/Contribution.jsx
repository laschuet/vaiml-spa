import PropTypes from 'prop-types';
import React from 'react';

const Contribution = props => (
  <div className="Box Box--condensed mb-2">
    <div className="Box-header clearfix">
      <div className="float-left">
        {props.author} &middot; {props.createdAt} &middot; #{props.id}
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
  assessmentContent: PropTypes.string,
  assessmentDecision: PropTypes.bool,
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  createdAt: PropTypes.string,
  id: PropTypes.number.isRequired,
  modifiedAt: PropTypes.string,
  negRatings: PropTypes.number,
  number: PropTypes.number,
  posRatings: PropTypes.number,
  reference: PropTypes.string,
};

export default Contribution;
