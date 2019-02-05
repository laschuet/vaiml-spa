import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Contribution from './Contribution';

const ContributionList = props => (
  <Fragment>
    {props.contributions.map(contribution => (
      <Contribution
        key={contribution.id}
        id={contribution.id}
        author={contribution.author}
        timestamp={contribution.timestamp}>
        {contribution.text}
      </Contribution>
    ))}
  </Fragment>
);

ContributionList.propTypes = {
  contributions: PropTypes.arrayOf(Contribution),
};

export default ContributionList;
