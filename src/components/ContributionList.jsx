import PropTypes from 'prop-types';
import React from 'react';

import Contribution from './Contribution';

const ContributionList = props => (
  <div className="d-flex flex-column">
    {props.contributions.map(contribution => (
      <Contribution
        key={contribution.id}
        id={contribution.id}
        author={contribution.author}
        timestamp={contribution.timestamp}>
        {contribution.text}
      </Contribution>
    ))}
  </div>
);

ContributionList.propTypes = {
  contributions: PropTypes.arrayOf(Contribution),
};

export default ContributionList;
