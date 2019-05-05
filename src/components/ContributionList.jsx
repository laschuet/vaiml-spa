import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Contribution from './Contribution';

const ContributionList = props => (
  <Fragment>
    {props.contributions.map(contribution => (
      <Contribution
        key={contribution.id}
        assessmentContent={contribution.assessmentContent}
        assessmentDecision={contribution.assessmentDecision}
        author={contribution.author}
        content={contribution.content}
        createdAt={contribution.createdAt}
        id={contribution.id}
        modifiedAt={contribution.modifiedAt}
        negRatings={contribution.negRatings}
        number={contribution.number}
        posRatings={contribution.posRatings}
        reference={contribution.ref}
      />
    ))}
  </Fragment>
);

ContributionList.propTypes = {
  contributions: PropTypes.arrayOf(PropTypes.shape(Contribution.propTypes)).isRequired,
};

export default ContributionList;
